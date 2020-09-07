# Demo WebDriverIO with Cucumber

**Demo WebDriverIO** is a demonstration project of integration tests. In this project the user sends a message to the customer service on [Automation Practice](http://automationpractice.com).  
These tests are developed in TypeScript with [WebDriverIO V6](http://webdriver.io/) and [Cucumber](https://cucumber.io/)

## Requirements

-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Run e2e tests:

```bash
yarn tests:e2e
```

## Spoken Languages

If you want to use another language in features files, you can see this [doc](https://cucumber.io/docs/gherkin/reference/#spoken-languages) about how can you do that.

## Reports

### Allure

Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
yarn report:open
```

### Time line reporter

You can see [Timeline report](https://github.com/QualityOps/wdio-timeline-reporter) in `./test-report/timeline/timeline-report.html`

## Prettier

Run to format the code:

```bash
yarn code:format
```
