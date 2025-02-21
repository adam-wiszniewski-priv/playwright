import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/hooks';
import { PracticeFormPage } from '../pageObjects/practiceFormPage';
import { CustomWorld } from 'support/world';

Given('I navigate to the DemoQA form page', async function (this: CustomWorld) {
  const practiceFormPage = new PracticeFormPage(this.page)
  await practiceFormPage.navigate()
});

Then('the page title should contain {string}', async function (this: CustomWorld, expectedTitle: string) {
  const title = await this.page.title();
  expect(title).toContain(expectedTitle);
});

When('I submit the form', async function (this: CustomWorld) {
  const practiceFormPage = new PracticeFormPage(this.page)
  await practiceFormPage.submitButton.click()
});

Then('validation errors appear', async function (this: CustomWorld) {
  
});