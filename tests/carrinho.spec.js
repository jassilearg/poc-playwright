import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { YourCart } from '../pages/YourCartPage';

const URL = 'https://www.saucedemo.com/';
const NOME_USUARIO = process.env.USUARIO;
const SENHA = process.env.SENHA;

test.describe('carrinho de compras', () => {
  let loginPage;
  let homePage;
  let yourCart;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    yourCart = new YourCart(page);

    await loginPage.goto(URL);
    await loginPage.login(NOME_USUARIO, SENHA);
  });
  
  test('deve efetuar uma compra com sucesso', async () => {
    await homePage.adicionarAoCarrinho();
    await yourCart.validarItemCarrinho();
  });

  test.afterEach(async () => {
    await homePage.logout();
  });
});
