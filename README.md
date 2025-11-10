# Projeto de Testes Automatizados - SauceDemo

Este projeto contém testes end-to-end (E2E) automatizados para o site **SauceDemo**, utilizando **Playwright**, seguindo boas práticas de **Page Object Model** e **dados centralizados**.

---

##  Estrutura do Projeto

```
project-root/
│
├── tests/                  # Testes Playwright
│   └── carrinho.spec.js
│
├── pages/                  # Page Objects
│   ├── LoginPage.js
│   ├── HomePage.js
│   ├── YourCartPage.js
│   ├── CheckoutYourInformationPage.js
│   ├── CheckoutOverviewPage.js
│   └── CheckoutCompletePage.js
│
├── data/                   # Dados de teste centralizados
│   └── test.data.js
│
├── .env                    # Variáveis de ambiente (não versionar)
├── .env.example            # Modelo do .env
├── playwright.config.js    # Configuração Playwright
├── package.json
└── README.md
```

---

## Requisitos

- Node.js >= 18  
- npm ou yarn  
- Playwright (instalado via `npm install`)

---

## Configuração

### Instalar dependências:
```bash
npm install
```

### Criar arquivo de variáveis de ambiente:
Copie o `.env.example` para `.env` e preencha os valores reais:
```bash
cp .env.example .env
```


Verificar URLs e dados de teste em `data/test.data.js`.

---

## Executando os Testes

### Ver execução com a interface interativa do Playwright (UI Mode)

```bash
npx playwright test --ui
```

### Rodar todos os testes em paralelo:
```bash
npx playwright test
```

### Rodar um teste específico:
```bash
npx playwright test tests/carrinho.spec.js
```

### Rodar em um navegador específico:
```bash
npx playwright test --project=Chrome
npx playwright test --project=Firefox
npx playwright test --project=Safari
```

### Gerar relatório HTML:
```bash
npx playwright show-report
```

---

## Boas práticas aplicadas

- **Page Object Model (POM):** separação de lógica de UI e testes.  
- **Dados centralizados:** `test.data.js` para usuários e URLs.  
- **Uso de variáveis de ambiente:** `.env` para credenciais e URLs base.  
- **Teardown/cleanup:** logout e reset de carrinho após cada teste.  
- **Roteamento de testes via baseURL:** facilita troca de ambientes (dev, staging, prod).  

---

## Suposições e decisões importantes

- Cada teste é independente, garantindo reprodutibilidade.  
- O usuário padrão `standard_user` é usado para todos os testes de login.  
- Os testes assumem que os elementos do DOM possuem os IDs e classes do site atual.  
- O carrinho é limpo após cada teste para evitar efeitos colaterais.  

---

## Observações

- Não versionar `.env` para evitar vazamento de credenciais.  
- Para testes mais rápidos, é possível rodar em **headless** (`headless: true`) no `playwright.config.js`.  
- Para debugging visual, altere para **headless: false**.