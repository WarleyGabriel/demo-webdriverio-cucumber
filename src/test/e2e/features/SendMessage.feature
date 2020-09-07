Feature: Sending message to customer service

    Background:
        Given I'm on the login page
            And I log in with a user:
                | email                         | password      |
                | automationtests@testing.com   | 12345678      |

    Scenario: Show the customer service label
        When I'm on the contact page
        Then the system shows a customer service label

    Scenario: Attaching a document to the message to the customer
        When I'm on the contact page
            And I send a message with a document
        Then the system shows a successful message
