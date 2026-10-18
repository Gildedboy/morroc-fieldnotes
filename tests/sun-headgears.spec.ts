import { test, expect } from '@playwright/test';

test('Sun headgear guide publishes recipes and all nine observer minimaps', async ({ page, request }) => {
  await page.goto('guides/sun-headgears/');
  await expect(page.getByRole('heading', { name: 'Astrologika Moon and Sun Headgears', exact: true })).toBeVisible();
  await expect(page.locator('.article-header .wip-badge')).toHaveCount(0);
  const article = page.locator('article');
  await expect(article).toContainText('exactly +9');
  await expect(article).toContainText('character-bound');
  await expect(article.locator('a[href="https://rtm-database.pages.dev/index.html?id=6290"]')).toHaveCount(1);
  await expect(article.locator('a[href="https://rtm-database.pages.dev/index.html?id=25501"]')).toHaveCount(1);
  await expect(article.locator('.observer-layout')).toHaveCount(9);
  await expect(article.locator('.observer-map img')).toHaveCount(9);
  await expect(article.locator('.observer-layout').first()).toContainText('+9 Apus of the Moon → Apus of the Sun');
  await expect(article.locator('img')).toHaveCount(19);
  for (const img of await article.locator('img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const response = await request.get('search.json');
  expect(await response.text()).toContain('Astrologika Moon and Sun Headgears');
});
