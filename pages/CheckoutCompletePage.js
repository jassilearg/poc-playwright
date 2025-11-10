import { expect } from '@playwright/test';
import { urls } from '../fixtures/userData';

export class CheckoutCompletePage {
  constructor(page) {
    this.page = page;

    this.successTitle = page.getByText('Thank you for your order!');
    this.successMessage = page.getByText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
    this.backToProductsButton = page.locator('#back-to-products');
  }

  async validarSucessoPedido() {
    await expect(this.successTitle).toBeVisible();
    await expect(this.successMessage).toBeVisible();
    await this.backToProductsButton.click();
    await expect(this.page).toHaveURL(urls.inventory);
  }
}
