Feature: Acessar o site do google e fazer uma pesquisa
  O usuario acessa o site do google e realiza uma pesquisa sobre como 
  criar um projeto cypress utilizando typescript e cucumber framework

  Scenario: Acessar o site do google e realizar pesquisa
    Given o usuário acessa o site do google
    When digita o texto desejado
    Then visuaiza uma lista de artigos sobre o assunto pesquisado
