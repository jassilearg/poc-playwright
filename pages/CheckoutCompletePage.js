import { expect } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
  }

  async validarSucessoPedido() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
    await expect(
      this.page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    ).toBeVisible();

    await this.page.click('#back-to-products');
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }
}
