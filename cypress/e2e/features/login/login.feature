Feature: Login no sistema
  Como um usuário do sistema
  Eu quero fazer login
  Para acessar minha conta pessoal

  Background: 
    Given estou na página de login novamente, e cansado por sinal

  Scenario: Login bem-sucedido
    When insiro um nome de usuário e senha válidos
    Then devo ser autenticado pelo sistema

  Scenario: Login com senha incorreta
    When insiro um nome de usuário válido e uma senha incorreta
    Then deveria ver uma mensagem de erro informando que o usuário ou a senha está incorreta

  Scenario: Login com usuário inexistente
    When insiro um nome de usuário inexistente e uma senha válida
    Then deve aparecer uma mensagem de erro indicando que o nome de usuário ou a senha estão errados
