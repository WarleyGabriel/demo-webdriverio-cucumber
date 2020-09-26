# E2E tests with WebDriverIO and Cucumber

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Action Status](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/demo-webdriverio-cucumber/actions)

This is a demonstration project of integration tests. In this project the user sends a message to the customer service on [Automation Practice](http://automationpractice.com).  
These tests are developed in TypeScript with [WebDriverIO V6](http://webdriver.io/) and [Cucumber](https://cucumber.io/)

## Features

-   TypeScript
-   [Expect-webdriverio](https://github.com/webdriverio/expect-webdriverio)
-   Page Object Pattern
-   [Gherkin lint](https://github.com/vsiakka/gherkin-lint)
-   Scripts to check undefined and unused steps on step/feature files
-   [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
-   ESlint
-   Prettier
-   Husky
-   Github Actions example
-   Allure report (screenshots on failure) and Timeline report

## Requirements

-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npm run build
```

Run e2e tests:

```bash
npm run tests:e2e
```

## Spoken Languages

If you want to use another language in features files, you can see this [doc](https://cucumber.io/docs/gherkin/reference/#spoken-languages) about how can you do that.

## Reports

### Allure

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
npm run report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
npm run report:open
```

### Time line reporter

You can see [Timeline report](https://github.com/QualityOps/wdio-timeline-reporter) in `./test-report/timeline/timeline-report.html`

## Prettier and Eslint

Run to format the code:

```bash
npm run code:format
```

## Gherkin lint

We use [Gherkin lint](https://github.com/vsiakka/gherkin-lint) to keep the feature files organized.

```bash
npm run code:gherkin
```

Also, we have more two interesting hooks;

-   The first one checks if there is any step on feature files, and this step was not defined on step files:

```bash
npm run cucumber:undefined:step
```

-   The second one checks if there is any step on steps files, and this step was not being used on feature files:

```bash
npm run cucumber:unused:step
```

## Commit

We use the best practices for message's commit, using [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) we can generate changelogs automatically.

Run `npm run commit` and commitizen will help you.
