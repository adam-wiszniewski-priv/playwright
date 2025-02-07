import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/hooks';

Given('I navigate to the DemoQA form page', async () => {
  await page.goto('https://demoqa.com/automation-practice-form');
});

Then('the page title should contain {string}', async (expectedTitle: string) => {
  const title = await page.title();
  expect(title).toContain(expectedTitle);
});