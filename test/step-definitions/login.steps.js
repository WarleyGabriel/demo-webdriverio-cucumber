import { Given, When, Then } from 'cucumber';
import { login } from '../pages/login.page';
import { context } from '../data/context';

Given(/^I'm on the login page$/, () => {
  login.open();
});

When(/^I log in with a default user$/, () => {
  login.login(context.logins.user);
});

Then(/^Show a welcome message and user name on site$/, () => {
  login.checkLoginSuccessfully();
  login.displaysUserName(context.logins.user);
});
