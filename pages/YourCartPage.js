import { expect } from '@playwright/test';

export class YourCart {
  constructor(page) {
    this.page = page;
  }

  async validarItemCarrinho() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Your Cart');
    await this.page.click('#checkout');
  }
}
