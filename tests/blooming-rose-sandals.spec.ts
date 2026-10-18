import { test, expect } from '@playwright/test';

test('sandal crafting guide is searchable and separates materials from equipment requirements', async ({ page }, testInfo) => {
  await page.goto('./');
  await page.keyboard.press('Control+k');
  await page.getByRole('searchbox', { name: 'Search guides' }).fill('Rose Sage');
  const search = page.getByRole('dialog', { name: 'Search', exact: true });
  await expect(search.getByRole('status')).toHaveText('1 guide found');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Blooming Rose Sandals');
  const prerequisites = page.getByRole('complementary').filter({ hasText: 'Before you start' });
  await expect(prerequisites).toContainText('500 Distortion Shards');
  await expect(prerequisites).toContainText('10 MVP Shards');
  await expect(prerequisites).toContainText('1 pair of Old Rose Sandals refined to exactly +7');
  await expect(page.locator('[data-article]')).toContainText('Lost Traveler');
  await expect(page.locator('[data-article]')).toContainText('MVP Prize Boxes');
  await expect(prerequisites).not.toContainText('120');
  const reward = page.getByRole('complementary').filter({ hasText: 'Crafting reward' });
  await expect(reward).toContainText('Base Level 120');
  await expect(reward).toContainText('Blooming Rose Sandals will always have fixed rolls');
  await expect(page.getByRole('heading', { name: 'Sources & Acknowledgements' })).toHaveCount(0);
  await page.screenshot({ path: testInfo.outputPath('sandals-prerequisites.png') });
  const mobile = (page.viewportSize()?.width ?? 1440) < 1051;
  if (mobile) await page.getByText('On this page', { exact: true }).click();
  const outline = mobile ? page.locator('.mobile-outline') : page.getByRole('complementary', { name: 'Article outline' });
  const craft = outline.getByRole('link', { name: /Visit Rose Sage/ });
  await craft.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#3-visit-rose-sage-in-varmundts-mansion$/);
  for (const frame of await page.locator('.source-screenshot').all()) {
    await frame.scrollIntoViewIfNeeded();
    const img = frame.getByRole('img');
    await expect.poll(() => img.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  }
  await expect(page.locator('.source-screenshot')).toHaveCount(6);
  await expect(page.locator('.source-screenshot [data-cropped="true"]')).toHaveCount(6);
  await expect(page.locator('[data-article]')).toContainText('Please, fix my Sandals!');
  await expect(page.getByRole('img', { name: /Orphanage Distortion orb/ })).toHaveAttribute('src', /images\/blooming-rose-sandals\/orphanage-distortion\.jpg$/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
