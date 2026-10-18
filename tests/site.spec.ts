import { test, expect } from '@playwright/test';

test('library opens the first guide and credits its sources', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400 && response.url().startsWith('http://127.0.0.1')) errors.push(`${response.status()} ${response.url()}`); });
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A little direction.A bigger adventure.');
  await page.screenshot({ path: testInfo.outputPath('library.png'), fullPage: true });
  await page.getByRole('link', { name: 'Begin your journey' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('New Player Guide');
  await expect(page.getByRole('heading', { name: 'Sources & acknowledgements' })).toBeVisible();
  await expect(page.getByText('Not yet verified', { exact: true })).toBeVisible();
  await expect(page.locator('.site-footer')).toContainText('The source guides are publicly available.');
  await page.screenshot({ path: testInfo.outputPath('guide.png'), fullPage: true });
  expect(errors).toEqual([]);
});

test('keyboard search finds content and opens a guide', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Control+k');
  const search = page.getByRole('dialog', { name: 'Search', exact: true });
  await expect(search).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search guides' }).fill('scarf');
  await expect(search.getByRole('status')).toHaveText('1 guide found');
  await page.keyboard.press('ArrowDown');
  await expect(search.getByRole('link', { name: /New Player Guide/ })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('New Player Guide');
});

test('search handles no results and restores focus when dismissed', async ({ page }) => {
  await page.goto('./');
  const trigger = page.getByRole('button', { name: 'Search', exact: true });
  await trigger.click();
  await page.getByRole('searchbox', { name: 'Search guides' }).fill('no-such-route-9876');
  await expect(page.getByRole('status')).toContainText('No guides found');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog', { name: 'Search', exact: true })).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test('guide navigation works at each viewport without horizontal overflow', async ({ page }) => {
  await page.goto('./');
  if ((page.viewportSize()?.width ?? 1440) < 761) {
    await page.getByRole('button', { name: 'Open guide navigation' }).click();
    await expect(page.getByRole('dialog', { name: 'Your fieldnotes' })).toBeVisible();
  }
  await page.getByRole('navigation', { name: 'Guide library' }).getByRole('link', { name: /Leveling Spots/ }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Leveling Spots');
  await expect(page.getByText('This guide is a work in progress.', { exact: true })).toBeVisible();
  await expect(page.locator('[data-article]')).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('article outline works and related links open the class tree', async ({ page }) => {
  await page.goto('guides/new-player-guide/');
  const desktop = (page.viewportSize()?.width ?? 1440) > 1050;
  if (!desktop) await page.getByText('On this page', { exact: true }).click();
  const outline = desktop ? page.getByRole('complementary', { name: 'Article outline' }) : page.locator('.mobile-outline');
  await outline.getByRole('link', { name: /Know your starting tools/ }).click();
  await expect(page).toHaveURL(/#know-your-starting-tools$/);
  await expect(page.getByRole('heading', { name: 'Know your starting tools' })).toBeInViewport();
  await page.locator('.related-grid').getByRole('link', { name: /Job Class Tree/ }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Job Class Tree');
  await expect(page.locator('.class-explorer')).toBeVisible();
});

test('Trickster gear tabs switch panels and support arrow-key navigation', async ({ page }) => {
  await page.goto('./classes/trickster/');
  const tabs = page.getByRole('tablist', { name: 'Trickster gear slots' });
  const weapon = tabs.getByRole('tab', { name: 'Weapon' });
  const top = tabs.getByRole('tab', { name: 'Top Headgear' });
  const weaponPanel = page.getByRole('tabpanel', { name: 'Weapon' });
  const topPanel = page.getByRole('tabpanel', { name: 'Top Headgear' });

  await expect(weapon).toHaveAttribute('aria-selected', 'true');
  await expect(weaponPanel).toContainText('Gargantua — the top scythe for a Trickster');
  await top.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab', { name: 'Mid Headgear' })).toBeFocused();
  await expect(topPanel).toBeHidden();
  await page.keyboard.press('ArrowLeft');
  await expect(top).toBeFocused();
  await expect(topPanel).toBeVisible();
  await expect(topPanel).toContainText('No item recommendation is listed for this slot yet.');
});

test('essential reading and attribution work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}guides/new-player-guide/`);
  await expect(page.getByRole('heading', { name: 'Wake up as an Orphan' })).toBeVisible();
  await expect(page.locator('.site-footer')).toContainText('Original authors retain ownership');
  await context.close();
});

test('header and mobile menu expose the requested website and database links', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  if ((page.viewportSize()?.width ?? 1440) < 761) {
    await page.getByRole('button', { name: 'Open guide navigation' }).click();
  }
  const links = page.getByRole('navigation', { name: 'External resources' });
  await expect(links.getByRole('link', { name: 'Main website' })).toHaveAttribute('href', 'https://rtmrefuge.pages.dev/');
  await expect(links.getByRole('link', { name: 'Refuge database' })).toHaveAttribute('href', 'https://rtm-database.pages.dev/');
});

test('tutorial includes its eight uncropped source screenshots, steps, and scarf choices', async ({ page }) => {
  await page.goto('guides/new-player-guide/');
  const images = page.locator('.source-screenshot img');
  await expect(images).toHaveCount(8);
  await expect(page.getByRole('table')).toBeAttached();
  await expect(page.getByRole('row')).toHaveCount(10);
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty('complete', true);
    const dimensions = await image.evaluate(node => {
      const img = node as HTMLImageElement;
      const box = img.getBoundingClientRect();
      return { naturalWidth: img.naturalWidth, ratio: box.width / box.height, originalRatio: img.naturalWidth / img.naturalHeight, filter: getComputedStyle(img).filter };
    });
    expect(dimensions.naturalWidth).toBeGreaterThan(0);
    expect(dimensions.ratio).toBeCloseTo(dimensions.originalRatio, 2);
    expect(dimensions.filter).toBe('none');
  }
  await expect(page.getByRole('heading', { name: 'Collect your starting supplies' })).toBeAttached();
  await expect(page.getByRole('heading', { name: 'Understand the Memory Mirror' })).toBeAttached();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('draft guides expose only WIP notices and stay out of search', async ({ page, request }) => {
  for (const id of ['leveling-foundations', 'dungeons', 'distortions', 'bifrost-mirror', 'blooming-rose-sandals', 'sun-headgears', 'celestial-tome']) {
    await page.goto(`guides/${id}/`);
    await expect(page.getByText('This guide is a work in progress.', { exact: true })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
    await expect(page.locator('[data-article], .source-screenshot, .location-details, .class-paths')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Read the New Player Guide' })).toHaveAttribute('href', /guides\/new-player-guide\/$/);
  }
  const response = await request.get('search.json');
  expect(response.ok()).toBe(true);
  const index = await response.json();
  expect(index.map((entry: { title: string }) => entry.title).sort()).toEqual(['Job Class Tree', 'New Player Guide']);
  expect(JSON.stringify(index)).not.toContain('Pyramid Basement');
});
