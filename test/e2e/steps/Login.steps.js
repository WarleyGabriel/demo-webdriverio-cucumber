import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import { context } from '../../data/Context';
import * as systemMessages from '../constants/SystemMessages.constant';

Given(/^I'm on the login page$/, () => {
    loginPage.open();
});

When(/^I log in with a default user$/, () => {
    loginPage.login(context.logins.user);
});

Then(/^show a welcome message on the site$/, () => {
    assert.equal(
        loginPage.welcomeMessage.getText(),
        systemMessages.FEEDBACK_USER_LOGGED,
    );
});

Then(/^show user name '(.+)' on the site$/, (userName) => {
    assert.equal(loginPage.userLoggedIn.getText(), userName);
});
