import { expect } from '@playwright/test';
import { urls } from '../fixtures/userData';

export class HomePage {
  constructor(page) {
    this.page = page;

    this.productTitle = page.locator('text=Sauce Labs Fleece Jacket');
    this.addToCartButton = page.locator('#add-to-cart');
    this.removeButton = page.locator('#remove');
    this.cartBadge = page.locator('#shopping_cart_container a span');
    this.cartContainer = page.locator('#shopping_cart_container');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutButton = page.locator('#logout_sidebar_link');
  }

  async adicionarAoCarrinho() {
    await expect(this.page).toHaveURL(urls.inventory);
    await this.productTitle.click();
    await this.addToCartButton.click();
    await expect(this.removeButton).toBeVisible();
    await expect(this.cartBadge).toHaveText('1');
    await this.cartContainer.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}
