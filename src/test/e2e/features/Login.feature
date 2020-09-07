Feature: Performing a login

    Scenario: Login with a default user
        Given I'm on the login page
        When I log in with a user:
            | email                         | password      |
            | automationtests@testing.com   | 12345678      |
        Then show a welcome message on the site
            And show user name 'Leandro Nelson Gael Castro' on the site
