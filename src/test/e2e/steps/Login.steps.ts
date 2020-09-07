import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import * as systemMessages from '../constants/SystemMessages.constant';

Given(/^I'm on the login page$/, () => {
    loginPage.open();
});

When(/^I log in with a user:$/, (data) => {
    const [user] = data.hashes();
    loginPage.login(user.email, user.password);
});

Then(/^show a welcome message on the site$/, () => {
    expect(loginPage.welcomeMessage).toHaveText(
        systemMessages.FEEDBACK_USER_LOGGED,
    );
});

Then(/^show user name '(.+)' on the site$/, (userName) => {
    expect(loginPage.userLoggedIn).toHaveText(userName);
});
