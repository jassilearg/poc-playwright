import { expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
  }

  async validarResumoPedido() {
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
    await expect(this.page.locator('.inventory_item_name')).toHaveText('Sauce Labs Fleece Jacket');
    await expect(this.page.locator('.inventory_item_price')).toHaveText('$49.99');
    await expect(this.page.locator('.inventory_item_desc')).toHaveText(
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
    );
    await expect(this.page.locator('.summary_subtotal_label')).toHaveText('Item total: $49.99');
    await expect(this.page.locator('.summary_tax_label')).toHaveText('Tax: $4.00');
    await this.page.click('#finish');
  }
}
