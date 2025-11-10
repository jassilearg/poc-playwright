import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async adicionarAoCarrinho() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await this.page.click('text=Sauce Labs Fleece Jacket');
    await this.page.click('#add-to-cart');
    await expect(this.page.locator('#remove')).toBeVisible();
    await expect(this.page.locator('#shopping_cart_container > a > span')).toHaveText('1');
    await this.page.click('#shopping_cart_container');
  }

  async logout() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.click('#logout_sidebar_link');
  }
}
