Feature: Sending message to customer service

    Scenario: Login with a default user
        Given Show the login screen successfully
        And I log in with a default user
        When I send a message with a document
        Then System shows a successfully message
