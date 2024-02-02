Feature: Login
        Como usuário desejo autenticar no eSocial
    Background: 
        Given O usuário navega para a tela de autenticação
    Scenario: Validar login com dados corretos
            When informa o usuário, senha e clica em acessar 
            And clica no campo select e seleciona a fonte de dados
            Then logo, o usuário está autenticado no eSocial

    Scenario: Validar login sem preencher os campos
            When clica no campo usuário e senha, mas não informa nenhum valor
            Then Logo, visualiza as mensagens Usuário é requerido, Senha é requerido e botão acessar bloqueado        

    Scenario: Validar login com usuário e senha incorretos
            When informa usuário e senha incorreto
            Then Logo, visualiza uma modal com uma mensagem - Usuário não encontrado ou senha inválida!