Feature: Sending message to customer service

    Scenario: Show the customer service label
        Given I'm on the login page
        And I log in with a default user
        When I'm on the contact page
        Then the system shows a customer service label

    Scenario: Attaching a document to the message to the customer
        Given I'm on the login page
        And I log in with a default user
        And I'm on the contact page
        When I send a message with a document
        Then the system shows a successful message
