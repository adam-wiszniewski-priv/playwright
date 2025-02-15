import { test, expect } from '@playwright/test';

test('fill the form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await expect(page).toHaveTitle(/DEMOQA/);
});