import { test } from '@playwright/test';

//test.describe.configure({ mode: 'parallel' });

test('test A', async ({ page }) => {
  await page.goto('https://training.rcvacademy.com/');
});

test('test B', async ({ page }) => {
  await page.goto('https://www.qaclickacademy.com/');
});
