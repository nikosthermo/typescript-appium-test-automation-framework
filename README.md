# TypeScript Appium WebDriverIO Test Automation Framework

## Overview
This project contains automated tests for validating the functionality of the SauceDemo e-commerce website on Mobile devices using TypeScript and Appium with WebDriverIO.

## Table of Contents
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Test Architecture](#test-architecture)
- [Page Object Model](#page-object-model)
- [Test Data](#test-data)
- [Test Cases](#test-cases)
- [Reports](#reports)
- [Assumptions and Limitations](#assumptions-and-limitations)

## Project Structure
The project is organized as follows:
```
├── src/
│   ├── PageObjects/
│   │   ├── LoginPage.ts
│   │   └── ProductsPage.ts
│   ├── test/
│   │   ├── data/
│   │   │   └── testData.json
│   │   ├── specs/
│   │   │   ├── authentication.spec.ts
│   │   │   └── products.spec.ts
├── tsconfig.json
├── wdio.conf.ts
├── package.json
└── README.md
```

## Setup
1. **Install Node.js**:
   Make sure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Install Dependencies**:
   Navigate to the project directory and install all necessary packages.
   ```bash
   npm install
    ```
3. Install Appium:
   ```bash
   npm install -g appium
   ```
   
## Running Tests

1. Running the tests locally requires an Appium server to be running. You can start the Appium server by running the following command:
   ```bash
   appium
   ```
2. Execute the tests by running the following command:
   ```bash
   npx wdio run wdio.conf.ts
   ```
   
## Test Architecture
The tests are organized into feature-specific files under the specs directory. Each test file follows the Mocha BDD pattern with describe and it blocks. The tests are written using WebDriverIO's test runner and the Page Object Model design pattern.

## Page Object Model
Page Object Model (POM) is used to encapsulate the page details and operations. This helps in maintaining the code and reducing duplication.

## Test Data
Test data is managed in JSON files for simplicity and is located under the data directory.


## Assumptions and Limitations
The tests assume a stable internet connection.
Test data is managed in JSON files for simplicity.
The framework is configured for Allure reports.
The setup is designed to run on an Android emulator using the Google Chrome app.
