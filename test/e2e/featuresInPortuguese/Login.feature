# language: pt

Funcionalidade: Performing a login

    Contexto:
        Dado I'm on the login page

    Cenário: Login with a default user
        Quando I log in with a default user
        Então show a welcome message on the site
        E show user name 'Leandro Nelson Gael Castro' on the site
