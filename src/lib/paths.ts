export function withBase(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export function guideHref(id: string): string {
  if (id === 'job-class-tree') return withBase('classes/');
  return withBase(`guides/${id}/`);
}

export function formatDate(value: Date | string): string {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(value));
}
