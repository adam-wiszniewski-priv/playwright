import { Page, Locator } from '@playwright/test';

export class PracticeFormPage {
  readonly page: Page;

  // Form fields
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly genderRadioButton: (gender: string) => Locator;
  readonly mobileNumberInput: Locator;
  readonly dateOfBirthInput: Locator;
  readonly subjectsInput: Locator;
  readonly hobbiesCheckbox: (hobby: string) => Locator;
  readonly uploadPictureInput: Locator;
  readonly currentAddressInput: Locator;
  readonly stateDropdown: Locator;
  readonly cityDropdown: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.genderRadioButton = (gender: string) => page.locator(`input[value="${gender}"]`);
    this.mobileNumberInput = page.locator('#userNumber');
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    this.subjectsInput = page.locator('#subjectsInput');
    this.hobbiesCheckbox = (hobby: string) => page.locator(`label:has-text("${hobby}")`);
    this.uploadPictureInput = page.locator('#uploadPicture');
    this.currentAddressInput = page.locator('#currentAddress');
    this.stateDropdown = page.locator('#state');
    this.cityDropdown = page.locator('#city');
    this.submitButton = page.locator('#submit');
  }

  // Navigate to the practice form page
  async navigate() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  // Fill out the form
  async fillForm(data: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobileNumber: string;
    dateOfBirth: string;
    subjects: string[];
    hobbies: string[];
    picturePath: string;
    currentAddress: string;
    state: string;
    city: string;
  }) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.genderRadioButton(data.gender).click();
    await this.mobileNumberInput.fill(data.mobileNumber);
    await this.dateOfBirthInput.fill(data.dateOfBirth);
    for (const subject of data.subjects) {
      await this.subjectsInput.fill(subject);
      await this.page.keyboard.press('Enter');
    }
    for (const hobby of data.hobbies) {
      await this.hobbiesCheckbox(hobby).click();
    }
    await this.uploadPictureInput.setInputFiles(data.picturePath);
    await this.currentAddressInput.fill(data.currentAddress);
    await this.stateDropdown.click();
    await this.page.locator(`text=${data.state}`).click();
    await this.cityDropdown.click();
    await this.page.locator(`text=${data.city}`).click();
  }

  // Submit the form
  async submitForm() {
    await this.submitButton.click();
  }
}