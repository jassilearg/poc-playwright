import { expect } from '@playwright/test';

export class CheckoutYourInformationPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('[data-test="title"]');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
  }

  async preencherInformacoesPessoais(nome, sobrenome, cep) {
    await expect(this.title).toHaveText('Checkout: Your Information');
    await this.firstNameInput.fill(nome);
    await this.lastNameInput.fill(sobrenome);
    await this.postalCodeInput.fill(cep);
    await this.continueButton.click();
  }
}
