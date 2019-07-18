import { assert } from 'chai';
import { When, Then } from 'cucumber';
import { contact } from '../pages/Contact.page';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemLabels.constant';

When(/^I'm on the contact page$/, () => {
    contact.goToContactPage();
});

Then(/^the system shows a customer service label$/, () => {
    assert.equal(contact.heading.getText(), systemLabels.CUSTOMER_SERVICE);
});

When(/^I send a message with a document$/, () => {
    const content = {
        subject: 2,
        message: 'My first test.',
        file: 'test.pdf',
    };
    contact.sendMessage(content);
});

Then(/^the system shows a successful message$/, () => {
    assert.equal(
        contact.successMessage.getText(),
        systemMessages.FEEDBACK_MESSAGE_SENT,
    );
});
