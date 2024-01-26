Feature: Verificação de Visualização em um Site

  Scenario: Acessar um site e verificar a presença de um elemento
    Given que o usuário acessa o site translate.google
    When o usuário visualiza um parabéns
    Then o usuário fica feliz
