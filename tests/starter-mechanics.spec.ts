import { test, expect } from '@playwright/test';

test('starter mechanics link opens accessible ASPD and element tables', async ({ page }) => {
  await page.goto('guides/new-player-guide/');
  await expect(page.locator('article a[href="https://rtm-database.pages.dev/codex"]')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dying and Shadows', exact: true })).toBeAttached();
  await expect(page.locator('article')).toContainText('one Base Level');
  await page.locator('.related-section').getByRole('link', { name: /ASPD & Element Table/ }).click();
  await expect(page.getByRole('heading', { name: 'ASPD & Element Table', exact: true })).toBeVisible();
  await expect(page.locator('.element-table')).toHaveCount(2);
  for (const table of await page.locator('.element-table').all()) {
    await expect(table.locator('tbody tr')).toHaveCount(10);
    await expect(table.locator('tbody td')).toHaveCount(100);
  }
  const level4 = page.getByRole('region', { name: 'Element level 4 damage table; scroll horizontally', exact: true });
  const wind = level4.getByRole('row').filter({ has: page.getByRole('rowheader', { name: 'Wind', exact: true }) });
  await expect(wind.getByRole('cell').last()).toHaveText('90%');
  await level4.focus();
  await page.keyboard.press('ArrowRight');
  await expect(level4).toBeFocused();
  if ((page.viewportSize()?.width ?? 1440) < 600) {
    await expect.poll(() => level4.evaluate(el => el.scrollLeft)).toBeGreaterThan(0);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('Celestial Tome publishes the sage recipes and reward artwork', async ({ page, request }) => {
  await page.goto('guides/celestial-tome/');
  await expect(page.locator('.article-header .wip-badge')).toHaveCount(0);
  await expect(page.locator('article')).toContainText('all 90 HATred quests');
  for (const [id, sage] of [[24225, 'Vali Sage'], [24148, 'Thor Sage'], [24107, 'Vidar Sage']] as const) {
    await expect(page.locator(`section[aria-labelledby="tome-${id}"]`)).toContainText(sage);
  }
  await expect(page.locator('article')).toContainText('Balder');
  for (const img of await page.locator('article img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  }
  await expect(page.locator('article img[alt="Celestial Tome item artwork from the Refuge database"]')).toBeVisible();
  const response = await request.get('search.json');
  const index = await response.json();
  expect(index.some((entry: { title: string }) => entry.title === 'Celestial Tome')).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
