import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { login } from '../pages/Login.page';
import { context } from '../../data/Context';
import * as systemMessages from '../constants/SystemMessages.constant';

Given(/^I'm on the login page$/, () => {
    login.open();
});

When(/^I log in with a default user$/, () => {
    login.login(context.logins.user);
});

Then(/^show a welcome message on the site$/, () => {
    assert.equal(
        login.welcomeMessage.getText(),
        systemMessages.FEEDBACK_USER_LOGGED,
    );
});

Then(/^show user name '(.+)' on the site$/, (userName) => {
    assert.equal(login.userLoggedIn.getText(), userName);
});
