import { test, expect } from '@playwright/test';

test('Bifrost walkthrough is searchable, illustrated, and navigable by keyboard', async ({ page }, testInfo) => {
  const failures: string[] = [];
  page.on('pageerror', error => failures.push(error.message));
  page.on('response', response => {
    if (response.url().includes('/images/bifrost-mirror/') && response.status() >= 400) failures.push(response.url());
  });
  await page.goto('./');
  await page.keyboard.press('Control+k');
  await page.getByRole('searchbox', { name: 'Search guides' }).fill('Cold Angel Wings');
  const dialog = page.getByRole('dialog', { name: 'Search', exact: true });
  await expect(dialog.getByRole('status')).toHaveText('1 guide found');
  await page.keyboard.press('ArrowDown');
  await expect(dialog.getByRole('link', { name: /Bifrost Mirror/ })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Bifrost Mirror');
  await expect(page.locator('.source-screenshot')).toHaveCount(14);
  const checklist = page.getByRole('complementary').filter({ hasText: 'Before you start' });
  await expect(checklist.getByRole('listitem')).toHaveCount(3);
  await expect(checklist).toContainText('Orphan Badge');
  await expect(checklist).toContainText('once per account');
  await expect(page.getByRole('heading', { name: 'Sources & Acknowledgements' })).toHaveCount(0);
  await page.screenshot({ path: testInfo.outputPath('bifrost-start.png') });

  const mobile = (page.viewportSize()?.width ?? 1440) < 1051;
  if (mobile) await page.getByText('On this page', { exact: true }).click();
  const outline = mobile ? page.locator('.mobile-outline') : page.getByRole('complementary', { name: 'Article outline' });
  const assemblyLink = outline.getByRole('link', { name: /Add the eyes in order/ });
  await assemblyLink.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#7-add-the-eyes-in-order$/);
  const rows = page.getByRole('table').getByRole('row');
  await expect(rows).toHaveCount(6);
  await expect(rows.nth(1)).toContainText('Master of Vidar');
  await expect(rows.nth(2)).toContainText('Master of Vali');
  await expect(rows.nth(3)).toContainText('Master of Thor');
  await expect(rows.nth(4)).toContainText('Master of Balder');
  await expect(rows.nth(5)).toContainText('475,000 Zeny');
  await page.screenshot({ path: testInfo.outputPath('bifrost-assembly.png') });

  for (const img of await page.locator('.source-screenshot img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
    expect(await img.evaluate((image: HTMLImageElement) => Math.abs(image.width / image.height - image.naturalWidth / image.naturalHeight))).toBeLessThan(0.01);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.locator('[data-article]').getByRole('link', { name: 'Distortions guide' })).toHaveAttribute('href', /guides\/distortions\/$/);
  await page.goto('./about/');
  const sourceEntry = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Bifrost Mirror', exact: true }) });
  await expect(sourceEntry).toContainText('Bahadur');
  await expect(sourceEntry).toContainText('October 23, 2023');
  expect(failures).toEqual([]);
});
