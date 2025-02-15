import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/hooks';
import { PracticeFormPage } from 'pageObjects/practiceFormPage';

Given('I navigate to the DemoQA form page', async () => {
  const practiceFormPage = new PracticeFormPage(page)
  practiceFormPage.navigate()
});

Then('the page title should contain {string}', async (expectedTitle: string) => {
  const title = await page.title();
  expect(title).toContain(expectedTitle);
});

When('I submit the form', async () => {
  const practiceFormPage = new PracticeFormPage(page)
  practiceFormPage.submitButton.click()
});

Then('validation errors appear', async () => {
  
});