Feature: Performing a login

    Background:
        Given Show the login screen successfully

    Scenario: Login with a default user
        When I log in with a default user
        Then Show a welcome message and user name on site
