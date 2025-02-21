import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { CustomWorld } from './world';

let browser: Browser;
export let page: Page;

Before(async function (this: CustomWorld) {
  await this.init()
});

After(async function (this: CustomWorld) {
  await this.close();
});