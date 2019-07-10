Refer https://codecept.io/ for detailed instruction

Prerequisites -
Install nodejs for windows

Setup
Install codeceptjs
Run `npm install` from the project directory to install required node modules

Executing Tests:
Start Selenium server on 4444 using
`npm run start-server`

To Run Tests:
`npm test`
This will run tests and save `mochawesome` report in the output directory
 
Write your own tests:
Enable intellisense- 
`codeceptjs def`
`include /// <reference path="./steps.d.ts" /> into your test files `

If you do not have a config then use the following to initialize config- 
`codecept init`
Follow instructions on the cli to auto-generate the config

Create your first test-
`codeceptjs gt`

Create a pageobject- 
`codeceptjs gpo`

BDD Style

If you do not have an existing feature file then to generate your first Feature file- 
`codeceptjs gherkin:init`

Generate Step Definition for all unimplemented steps- 
`codeceptjs gherkin:snippets`

Run Feature tests with verbose output-
`codeceptjs run --features --verbose`


