import { test, expect, Locator} from '@playwright/test'

test('Full page screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/screenshots');
  await page.screenshot({ path: 'screenshots/fullpage.png', fullPage: true });
});

test('Element screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/screenshots');
  const logo: Locator = page.getByRole('heading', { name: 'Element screenshot'});
  await logo.screenshot({ path: 'screenshots/logo.png' });
});

test('This test will fail and capture screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/screenshots');
   await page.screenshot({ path: 'screenshots/failPage.png', fullPage: true });
  
  // This will fail because the title is wrong
  await expect(page).toHaveTitle(/Wrong Title/);
});