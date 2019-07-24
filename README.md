## Demo WebDriverIO with Cucumber

**Demo WebDriverIO** is a demonstration project of integration tests. In this project the user sends a message to the customer service on [Automation Practice](http://automationpractice.com). <br/>
These tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/)<br/>

#### Requirements

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)
- Selenium Server: Here's how to set up a server: [Zalenium](https://github.com/zalando/zalenium) or [Selenium HQ](https://github.com/SeleniumHQ/docker-selenium)

#### Getting Started

Install the dependencies:
```
yarn install
```

In wdio.conf.js file configure the host of the Selenium Server `hostname` (default: localhost). <br/>

If you don't want to start a Selenium Server, you can use Selenium Standalone from wdio (if you have JDK installed). <br/>
So, you should uncomment the line 58 on `wdio.conf.js`. <br/>
Then the tests run on your machine without a docker selenium.

Run e2e tests:
```
yarn run e2e:tests
```

#### Spoken Languages

If you want to use another language in features files, you can see this [doc](https://cucumber.io/docs/gherkin/reference/#spoken-languages) about how can you do that. <br/>
In the directory `./test/e2e/featuresInPortuguese/` there are features with the keywords in Portuguese.

#### Reports

![alt text](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/blob/master/images/allure-report.png)

If you don't have allure command line installed on your machine yet, follow the instructions [here](https://github.com/allure-framework/allure-docs/blob/master/docs/reporting/commandline.adoc).

After installing, run this command to generate the report:
```
yarn run report
```

You can run this command to start a server and open the report:
```
allure open test-report/allure-report
```

Also, you can see [Timeline report](https://github.com/QualityOps/wdio-timeline-reporter) in `./test-report/timeline`

#### Eslint and Prettier

Run check lint:
```
yarn run check
```

Run format lint:
```
yarn run format
```
