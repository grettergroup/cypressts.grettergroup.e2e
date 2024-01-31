import { elements } from "../login/login.elements";
import usuarios from "../../../fixtures/usuarios.json";
//import { swagger } from "../../../api/swagger";

export default new class loginPage {
  acessarPaginaInicial() {
    cy.visit("/");
  }

  /**
   * @param usuario - usuário a ser inserido no campo de login
   * @param senha - senha a ser inserida no campo de senha
   */

  autenticarUsuario(
    usuario: string = usuarios.master.usuario,
    senha: string = usuarios.master.senha
  ) {
    this.inserirUsuário(usuario);
    this.inserirSenha(senha);
  }

  /**
   * @param usuario - usuário a ser inserido no campo de login
   */

  inserirUsuário(usuario: string) {
    cy.get(elements.inputUsuario).type(usuario);
  }

  /**
   * @param senha - senha a ser inserida no campo de senha
   */

  inserirSenha(senha: string) {
    cy.get(elements.inputSenha).type(senha);
  }

  clicarBotaoEntrar() {
    cy.intercept("POST", swagger.auth.login).as("login");
    cy.get(elements.botaoEntrar).click();
  }

  validarMensagemErro() {
    cy.get(elements.mensagem).contains("Usuário ou senha inválidos");
  }

  validarAutenticacao() {
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  }
};
