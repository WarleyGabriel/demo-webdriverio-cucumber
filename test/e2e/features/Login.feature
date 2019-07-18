Feature: Performing a login

    Background:
        Given I'm on the login page

    Scenario: Login with a default user
        When I log in with a default user
        Then show a welcome message on the site
        And show user name 'Leandro Nelson Gael Castro' on the site
