import { When, Then } from 'cucumber';
import { contact } from '../pages/contact.page';

When(/^I send a message with a document$/, () => {
  const content = {
    subject: 2,
    message: 'My first test.',
    file: 'test.pdf',
  };
  contact.sendMessage(content);
});

Then(/^System shows a successfully message$/, () => {
  contact.checkMessageSentSuccessfully();
});
