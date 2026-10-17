export {};
interface SearchEntry { title: string; description: string; category: string; href: string; text: string }

const searchDialog = document.querySelector<HTMLDialogElement>('#search-dialog');
const menuDialog = document.querySelector<HTMLDialogElement>('#mobile-menu');
const input = document.querySelector<HTMLInputElement>('#guide-search');
const results = document.querySelector<HTMLUListElement>('#search-results');
const status = document.querySelector<HTMLElement>('.search-status');
let entries: SearchEntry[] | undefined;
let loading: Promise<void> | undefined;

function renderResults() {
  if (!input || !results || !status || !entries) return;
  const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const matches = entries.filter(entry => {
    const text = `${entry.title} ${entry.description} ${entry.category} ${entry.text}`.toLowerCase();
    return terms.every(term => text.includes(term));
  });
  results.replaceChildren();
  for (const entry of matches) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = entry.href;
    const category = document.createElement('small');
    category.textContent = entry.category;
    const title = document.createElement('strong');
    title.textContent = entry.title;
    const description = document.createElement('span');
    description.textContent = entry.description;
    link.append(category, title, description);
    li.append(link);
    results.append(li);
  }
  status.textContent = matches.length
    ? `${matches.length} guide${matches.length === 1 ? '' : 's'}${terms.length ? ' found' : ' to explore'}`
    : 'No guides found. Try a class, location, or another keyword.';
}

async function loadIndex() {
  if (entries) return renderResults();
  if (loading) return loading;
  if (status) status.textContent = 'Loading the fieldnotes…';
  loading = (async () => {
    try {
      const response = await fetch(searchDialog?.dataset.indexUrl ?? '');
      if (!response.ok) throw new Error('Search index unavailable');
      entries = await response.json() as SearchEntry[];
      renderResults();
    } catch {
      if (status) status.textContent = 'Search is unavailable. Please use the guide navigation or reopen search to retry.';
    } finally { loading = undefined; }
  })();
  return loading;
}

function openSearch() {
  menuDialog?.close();
  if (!searchDialog?.open) searchDialog?.showModal();
  input?.focus();
  void loadIndex();
}

document.querySelectorAll('[data-open-search]').forEach(button => button.addEventListener('click', openSearch));
document.querySelector('[data-open-menu]')?.addEventListener('click', () => menuDialog?.showModal());
document.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog')?.close()));
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
});
input?.addEventListener('input', renderResults);
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (searchDialog?.open) searchDialog.close(); else openSearch();
  }
});
searchDialog?.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    searchDialog.close();
    return;
  }
  const links = Array.from(results?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
  const index = links.findIndex(link => link === document.activeElement);
  if (event.key === 'ArrowDown' && links.length) {
    event.preventDefault(); links[(index + 1) % links.length]?.focus();
  } else if (event.key === 'ArrowUp' && links.length) {
    event.preventDefault();
    if (index <= 0) input?.focus(); else links[index - 1]?.focus();
  } else if (event.key === 'Enter' && document.activeElement === input && links[0]) {
    event.preventDefault(); links[0].click();
  }
});

const outlineLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-outline-link]'));
const observedSections = outlineLinks.map(link => document.getElementById(decodeURIComponent(link.hash.slice(1)))).filter((node): node is HTMLElement => Boolean(node));
const progress = document.querySelector<HTMLElement>('#reading-progress');
let scheduled = false;
function updateReadingPosition() {
  const threshold = window.innerHeight * 0.28;
  const active = observedSections.filter(section => section.getBoundingClientRect().top <= threshold).at(-1) ?? observedSections[0];
  outlineLinks.forEach(link => {
    if (active && link.hash.slice(1) === active.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if (progress) {
    const article = document.querySelector<HTMLElement>('[data-article]');
    const end = article ? article.offsetTop + article.offsetHeight - window.innerHeight : 0;
    progress.style.transform = `scaleX(${Math.max(0, Math.min(1, window.scrollY / Math.max(1, end)))})`;
  }
  scheduled = false;
}
document.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateReadingPosition); }
}, { passive: true });
window.addEventListener('resize', updateReadingPosition);
updateReadingPosition();
