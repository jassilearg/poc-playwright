import { expect } from '@playwright/test';

export class CheckoutYourInformationPage {
  constructor(page) {
    this.page = page;
  }

  async preencherInformacoesPessoais(nome, sobrenome, cep) {
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');
    await this.page.fill('#first-name', nome);
    await this.page.fill('#last-name', sobrenome);
    await this.page.fill('#postal-code', cep);
    await this.page.click('#continue');
  }
}
