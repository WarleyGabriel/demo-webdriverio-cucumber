import { When, Then } from 'cucumber';
import { contactPage } from '../pages/Contact.page';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemLabels.constant';

When(/^I'm on the contact page$/, () => {
    contactPage.goToContactPage();
});

When(/^I send a message with a document$/, () => {
    const content = {
        subject: '2',
        message: 'My first test.',
        file: 'file.pdf',
    };
    contactPage.sendMessage(content);

    // This sleep is unnecessary for the test, it's only to see the result (on-screen)
    browser.pause(5000);
});

Then(/^the system shows a successful message$/, () => {
    expect(contactPage.successMessage).toHaveText(
        systemMessages.FEEDBACK_MESSAGE_SENT,
    );
});

Then(/^the system shows a customer service label$/, () => {
    expect(contactPage.heading).toHaveText(systemLabels.CUSTOMER_SERVICE);
});
