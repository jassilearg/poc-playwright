import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { YourCart } from '../pages/YourCartPage';
import { CheckoutYourInformationPage } from '../pages/CheckoutYourInformationPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { userData } from '../fixtures/userData.js';

const NOME_USUARIO = process.env.USUARIO;
const SENHA = process.env.SENHA;

test.describe('Carrinho de compras', () => {
  let loginPage;
  let homePage;
  let yourCart;
  let checkoutYourInformationPage;
  let checkoutOverviewPage;
  let checkoutCompletePage;

  test.beforeEach(async ({ page, baseURL }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    yourCart = new YourCart(page);
    checkoutYourInformationPage = new CheckoutYourInformationPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    checkoutCompletePage = new CheckoutCompletePage(page);

    await loginPage.goto(baseURL);
    await loginPage.login(NOME_USUARIO, SENHA);
  });

  test('deve efetuar uma compra com sucesso', async () => {
    await homePage.adicionarAoCarrinho();
    await yourCart.validarItemCarrinho();
    await checkoutYourInformationPage.preencherInformacoesPessoais(
      userData.nome,
      userData.sobrenome,
      userData.cep
    );
    await checkoutOverviewPage.validarResumoPedido();
    await checkoutCompletePage.validarSucessoPedido();
  });

  test.afterEach(async () => {
    await homePage.logout();
  });
});