import { expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('[data-test="title"]');
    this.itemName = page.locator('.inventory_item_name');
    this.itemPrice = page.locator('.inventory_item_price');
    this.itemDescription = page.locator('.inventory_item_desc');
    this.subtotalLabel = page.locator('.summary_subtotal_label');
    this.taxLabel = page.locator('.summary_tax_label');
    this.finishButton = page.locator('#finish');
  }

  async validarResumoPedido() {
    await expect(this.title).toHaveText('Checkout: Overview');
    await expect(this.itemName).toHaveText('Sauce Labs Fleece Jacket');
    await expect(this.itemPrice).toHaveText('$49.99');
    await expect(this.itemDescription).toContainText('fleece jacket');
    await expect(this.subtotalLabel).toContainText('Item total: $49.99');
    await expect(this.taxLabel).toContainText('Tax: $4.00');
    await this.finishButton.click();
  }
}
