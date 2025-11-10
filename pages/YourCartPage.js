import { expect } from '@playwright/test';
import { urls } from '../fixtures/userData';

export class YourCart {
  constructor(page) {
    this.page = page;

    this.title = page.locator('[data-test="title"]');
    this.checkoutButton = page.locator('#checkout');
  }

  async validarItemCarrinho() {
    await expect(this.page).toHaveURL(urls.cart);
    await expect(this.title).toHaveText('Your Cart');
    await this.checkoutButton.click();
  }
}
