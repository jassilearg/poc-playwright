export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(usuario, senha) {
    await this.page.fill('#user-name', usuario);
    await this.page.fill('#password', senha);
    await this.page.click('#login-button');
  }
}
