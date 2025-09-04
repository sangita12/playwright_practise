import { test, expect, Locator } from '@playwright/test'

test('File upload example', async({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.setInputFiles("#file-upload", 'Day24-Dropdowns-Part2.pdf' );

    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Upload'}).click();

    await page.waitForTimeout(3000);

})

test('File download example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  // Start download and wait for the download event
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('a:has-text("sample.txt")').click()
  ]);

  // Save file to specific path
  await download.saveAs('downloads/sample.txt');

  // Optional: verify file name
  expect(download.suggestedFilename()).toBe('sample.txt');
});
