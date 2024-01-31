import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/login/login.page";
import usuarios from "../../../fixtures/usuarios.json";

Given("estou na página de login novamente, e cansado por sinal", () => {
  loginPage.acessarPaginaInicial();
});

// Scenario: Login bem-sucedido
When("insiro um nome de usuário e senha válidos", () => {
  loginPage.autenticarUsuario();
  loginPage.clicarBotaoEntrar();
});
Then("devo ser autenticado pelo sistema", () => {
  loginPage.validarAutenticacao();
});

// Scenario: Login com senha incorreta
When("insiro um nome de usuário válido e uma senha incorreta", () => {
  loginPage.autenticarUsuario(usuarios.master.usuario, "senhaIncorreta");
  loginPage.clicarBotaoEntrar();
});
Then(
  "deveria ver uma mensagem de erro informando que o usuário ou a senha está incorreta",
  () => {
    loginPage.validarMensagemErro();
  }
);

// Scenario: Login com usuário inexistente
When("insiro um nome de usuário inexistente e uma senha válida", () => {
  loginPage.autenticarUsuario("usuarioInexistente", usuarios.master.senha);
  loginPage.clicarBotaoEntrar();
});
Then(
  "deve aparecer uma mensagem de erro indicando que o nome de usuário ou a senha estão errados",
  () => {
    loginPage.validarMensagemErro();
  }
);
