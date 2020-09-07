Feature: Performing a login

    Scenario: Login with a default user
        Given I'm on the login page
        When I log in with a default user
        Then show a welcome message on the site
            And show user name 'Leandro Nelson Gael Castro' on the site
