export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(usuario, senha) {
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(senha);
    await this.loginButton.click();
  }
}
