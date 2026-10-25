import { expect, test } from '@playwright/test';

test('weapon labels identify jobs and Trickster opens its starter walkthrough', async ({ page }) => {
  await page.goto('classes/');
  await expect(page.getByRole('button', { name: 'Mimic', exact: true })).toContainText('Codex');
  await expect(page.getByRole('button', { name: 'Illusionist', exact: true })).toContainText('Puppet');
  const trickster = page.getByRole('button', { name: 'Trickster', exact: true });
  await expect(trickster).toContainText('Scythes');
  await trickster.click();
  await page.getByRole('link', { name: 'Trickster guide' }).click();
  await expect(page.getByRole('heading', { name: 'Job Change Quest' })).toBeVisible();
  await expect(page.locator('[data-article]')).toContainText('Lorelei Sorin');
  await expect(page.locator('[data-article]')).toContainText('que_trck01 197, 198');
  await expect(page.getByRole('heading', { name: 'Next Step' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('class branches expand by keyboard and link to their class guides', async ({ page }) => {
  await page.goto('classes/');
  await expect(page.getByRole('button', { name: 'Orphan', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Orphan', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('complementary', { name: 'Article outline' })).toHaveCount(0);
  const thief = page.getByRole('button', { name: 'Thief', exact: true });
  await thief.focus();
  await page.keyboard.press('Enter');
  const thiefGuide = page.getByRole('link', { name: 'Read the Thief guide' });
  await expect(thiefGuide).toBeVisible();
  await expect(page.getByRole('button', { name: 'Assassin', exact: true })).toBeVisible();
  await thief.click();
  const bouncer = page.getByRole('button', { name: 'Bouncer', exact: true });
  await bouncer.click();
  await expect(page.getByRole('button', { name: 'Pit Boss', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Pit Boss', exact: true })).toContainText('Battlefield control');
  await bouncer.click();
  await expect(thief).toBeVisible();
  await expect(async () => {
    const center = await thief.evaluate(el => { const card = el.closest('.class-card')!.getBoundingClientRect(); const row = el.closest('.class-row')!.getBoundingClientRect(); return Math.abs((card.left + card.right) / 2 - (row.left + row.right) / 2); });
    expect(center).toBeLessThan(2);
  }).toPass();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await thief.click();
  await thiefGuide.click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Thief');
  await expect(page.getByRole('heading', { name: 'Become a Thief' })).toBeVisible();
  await expect(page.locator('[data-article]')).toContainText('500 Zeny');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('class tree works without JavaScript and class assets load locally', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}classes/`);
  await expect(page.locator('.class-branch')).toHaveCount(42);
  await page.getByRole('link', { name: 'Pit Boss', exact: true }).last().click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Pit Boss');
  await expect(page.getByText('This class guide is a work in progress.', { exact: false })).toBeVisible();
  const image = page.locator('.job-class-header img');
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await context.close();
});

test('ancestor selection preserves its branch and Orphan Back restores every choice', async ({ page }) => {
  await page.goto('classes/');
  const orphan = page.getByRole('button', { name: 'Orphan', exact: true });
  const trickster = page.getByRole('button', { name: 'Trickster', exact: true });
  const revenant = page.getByRole('button', { name: 'Revenant', exact: true });
  const back = page.getByRole('button', { name: 'Back', exact: true });
  await expect(orphan).toContainText('Start here');
  await expect(back).toBeHidden();
  await expect(page.getByRole('button', { name: 'Merchant', exact: true })).toContainText('Vendor only');
  await expect(page.locator('.merchant-line-label')).toHaveAttribute('aria-label', 'Requires Orphan, Base Level 1, Job Level 1');
  await trickster.click();
  await expect(back).toBeVisible();
  await expect(page.getByRole('button', { name: 'Merchant', exact: true })).toBeHidden();
  await expect(page.getByRole('complementary', { name: 'Trickster guide' })).toContainText('Strengths');
  await expect(page.getByRole('complementary', { name: 'Trickster guide' })).toContainText('leeching');
  await revenant.click();
  await trickster.click();
  await expect(trickster).toHaveAttribute('aria-pressed', 'true');
  await expect(revenant).toBeVisible();
  await expect(revenant).toHaveAttribute('aria-pressed', 'false');
  await expect(page.getByRole('button', { name: 'Thief', exact: true })).toBeHidden();
  await expect(page.locator('[data-class-id="trickster"] > .class-card-wrap .class-motion-sprite.class-attacking')).toHaveCSS('visibility', 'visible');
  await back.click();
  await expect(back).toBeHidden();
  await expect(page.getByRole('button', { name: 'Thief', exact: true })).toBeVisible();
  await expect(orphan).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Merchant', exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('rapid selection stays stable and closing class information never moves cards', async ({ page }) => {
  await page.goto('classes/');
  const trickster = page.getByRole('button', { name: 'Trickster', exact: true });
  await trickster.evaluate(button => { for (let i=0; i<31; i++) (button as HTMLButtonElement).click(); });
  await expect(trickster).toHaveAttribute('aria-pressed', 'true');
  await expect(trickster).toHaveCSS('transform', 'none');
  await expect(page.getByRole('button', { name: 'Revenant', exact: true })).toBeVisible();
  const info = page.getByRole('complementary', { name: 'Trickster guide' });
  await expect(info).toHaveCSS('position', 'fixed');
  await expect(page.locator('.class-connections path')).toHaveCount(2);
  await expect(page.locator('.class-connections path[data-parent-class="orphan"]')).toHaveAttribute('data-child-class', 'trickster');
  await expect(page.locator('.class-connections path[data-parent-class="trickster"]')).toHaveAttribute('data-child-class', 'revenant');
  await expect(async () => {
    expect(await page.locator('.class-card-wrap').evaluateAll(wraps => wraps.flatMap(wrap => wrap.getAnimations()).length)).toBe(0);
  }).toPass();
  const positions = () => page.locator('.class-card').evaluateAll(cards => cards.filter(card => card.getClientRects().length).map(card => { const box=card.getBoundingClientRect(); return [box.x, box.y, box.width, box.height]; }));
  const before = await positions();
  await info.getByRole('button', { name: 'Close class details' }).click();
  await expect(info).toBeHidden();
  expect(await positions()).toEqual(before);
  const overlaps = await trickster.evaluate(card => {
    const tags=card.querySelector('.class-card-tags')!.getBoundingClientRect();
    const sprite=card.querySelector('.class-sprite-frame')!.getBoundingClientRect();
    return tags.bottom > sprite.top;
  });
  expect(overlaps).toBe(false);
});

test('cards share dimensions and Orphan stays centered with Merchant at the far right', async ({ page }, testInfo) => {
  await page.goto('classes/');
  await expect(page.locator('[data-class-explorer]')).toHaveAttribute('data-ready', 'true');
  await expect(async () => {
    const geometry = await page.locator('[data-class-explorer]').evaluate(explorer => {
      const area = explorer.getBoundingClientRect();
      const orphan = explorer.querySelector<HTMLButtonElement>('.class-root > .class-card-wrap > .class-card')!.getBoundingClientRect();
      const merchant = explorer.querySelector<HTMLButtonElement>('[data-class-id="merchant"] .class-card')!.getBoundingClientRect();
      const options = explorer.querySelector('.class-root > .class-children > .class-row')!.getBoundingClientRect();
      const sizes = Array.from(explorer.querySelectorAll<HTMLButtonElement>('.class-card')).filter(card => card.getClientRects().length).map(card => [card.offsetWidth, card.offsetHeight]);
      return { orphanCenter: (orphan.left + orphan.right)/2, areaCenter: (area.left + area.right)/2, rightGap: options.right - merchant.right, rowDelta: orphan.top - merchant.top, sizes };
    });
    expect(Math.abs(geometry.orphanCenter - geometry.areaCenter)).toBeLessThan(1);
    expect(Math.abs(geometry.rightGap)).toBeLessThan(1);
    expect(Math.abs(geometry.rowDelta)).toBeLessThan(1);
    expect(new Set(geometry.sizes.map(size => size.join('x'))).size).toBe(1);
  }).toPass();
  await expect(page.locator('.class-root > .class-card-wrap > .class-card .class-attacking.class-motion-sprite')).toHaveCSS('visibility', 'visible');
  await page.screenshot({ path: testInfo.outputPath('class-tree-layout.png'), fullPage: true });
});

test('Merchant information stays beside its card without shifting the tree', async ({ page }) => {
  await page.goto('classes/');
  const merchant = page.getByRole('button', { name: 'Merchant', exact: true });
  const options = page.locator('.class-root > .class-children > .class-row');
  const optionsPosition = () => options.evaluate(el => { const box=el.getBoundingClientRect(); return { x: box.x + scrollX, y: box.y + scrollY, width: box.width, height: box.height }; });
  const initialOptions = await optionsPosition();
  await merchant.click();
  const info = page.getByRole('complementary', { name: 'Merchant guide' });
  await expect(info).toBeVisible();
  await expect(options).toBeHidden();
  await expect(async () => {
    const cardBox = await merchant.boundingBox();
    const infoBox = await info.boundingBox();
    expect(cardBox).not.toBeNull();
    expect(infoBox).not.toBeNull();
    const beside = infoBox!.x >= cardBox!.x + cardBox!.width || infoBox!.x + infoBox!.width <= cardBox!.x;
    expect(beside).toBe(true);
  }).toPass();
  const before = await page.locator('.class-root > .class-card-wrap > .class-card').boundingBox();
  await info.getByRole('button', { name: 'Close class details' }).click();
  expect(await page.locator('.class-root > .class-card-wrap > .class-card').boundingBox()).toEqual(before);
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await expect(options).toBeVisible();
  expect(await optionsPosition()).toEqual(initialOptions);
  await expect(page.getByRole('button', { name: 'Back', exact: true })).toBeHidden();
});

test('global sprite selection preserves the active branch and Merchant idle pose', async ({ page }) => {
  await page.goto('classes/');
  await page.getByRole('button', { name: 'Trickster', exact: true }).click();
  await page.getByRole('radio', { name: 'Female', exact: true }).check();
  const explorer = page.locator('[data-class-explorer]');
  await expect(explorer).toHaveAttribute('data-sprite-gender', 'female');
  await expect(page.getByRole('button', { name: 'Trickster', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-class-id="trickster"] .class-motion-sprite.class-attacking').first()).toHaveAttribute('src', /trickster-female-attacking\.webp$/);
  await expect(page.locator('[data-class-id="merchant"] .class-motion-sprite.class-attacking')).toHaveAttribute('src', /merchant-female-idle\.webp$/);
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await page.getByRole('button', { name: 'Merchant', exact: true }).click();
  await expect(page.locator('[data-class-id="merchant"] .class-motion-sprite.class-attacking')).toHaveCSS('visibility', 'visible');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await expect(explorer).toHaveAttribute('data-sprite-gender', 'male');
  await expect(page.locator('[data-class-id="merchant"] .class-motion-sprite.class-attacking')).toHaveAttribute('src', /merchant-idle\.webp$/);
});

test('selecting an endpoint keeps its card and connector horizontally stable', async ({ page }) => {
  await page.goto('classes/');
  await page.getByRole('button', { name: 'Trickster', exact: true }).click();
  const revenant = page.getByRole('button', { name: 'Revenant', exact: true });
  await expect(revenant).toBeVisible();
  await expect(async () => expect(await page.locator('.class-card-wrap').evaluateAll(wraps => wraps.flatMap(wrap => wrap.getAnimations()).length)).toBe(0)).toPass();
  const result = await revenant.evaluate(async element => {
    const button=element as HTMLButtonElement;
    const before=button.getBoundingClientRect().x;
    button.click();
    const samples=[];
    for(let frame=0;frame<15;frame++) { await new Promise(requestAnimationFrame); samples.push(button.getBoundingClientRect().x); }
    return { before, samples };
  });
  expect(Math.max(...result.samples.map(x => Math.abs(x-result.before)))).toBeLessThan(1);
});

test('initial card layout is identical before and after JavaScript initializes', async ({ page, browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: page.viewportSize()! });
  const staticPage = await context.newPage();
  const readLayout = () => Array.from(document.querySelectorAll<HTMLElement>('.class-card')).filter(card => card.getClientRects().length).map(card => { const rect = card.getBoundingClientRect(); return [card.getAttribute('aria-label'), rect.x + scrollX, rect.y + scrollY, rect.width, rect.height]; });
  await staticPage.goto(`${baseURL}classes/`);
  await staticPage.evaluate(() => document.fonts.ready);
  const before = await staticPage.evaluate(readLayout);
  await page.goto('classes/');
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('[data-class-explorer]')).toHaveAttribute('data-ready', 'true');
  expect(await page.evaluate(readLayout)).toEqual(before);
  await context.close();
});
