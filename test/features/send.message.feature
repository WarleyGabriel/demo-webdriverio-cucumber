Feature: Sending message to customer service

    Scenario: Attaching a document to the message to the customer
        Given I'm on the login page
        And I log in with a default user
        When I send a message with a document
        Then The system shows a successful message
