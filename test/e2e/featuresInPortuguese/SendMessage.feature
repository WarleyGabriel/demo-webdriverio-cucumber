# language: pt

Funcionalidade: Sending message to customer service

    Cenário: Show the customer service label
        Dado I'm on the login page
        E I log in with a default user
        Quando I'm on the contact page
        Então the system shows a customer service label

    Cenário: Attaching a document to the message to the customer
        Dado I'm on the login page
        E I log in with a default user
        E I'm on the contact page
        Quando I send a message with a document
        Então the system shows a successful message
