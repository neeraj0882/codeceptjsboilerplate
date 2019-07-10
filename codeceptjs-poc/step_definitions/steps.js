/// <reference path="./steps.d.ts" />
const I = actor();
const registerPage = require('../pages/register.js');
const assert = require('chai').assert;
const sql = require('mssql');
var dbRes = require('../CustomHelpers/dbRes.js');

Given('I am on the home page', () => {
    //for fetching data from database
//member = await dbRes.ConnectDB();
  I.amOnPage('http://newtours.demoaut.com/mercurywelcome.php');
});

Given('I am on the registration page', () => {
  I.click('REGISTER');
  I.wait(1);
});

When('I fill in all details on the page', () => {
  I.fillField(registerPage.firstName,'testFirstName' );
  I.fillField(registerPage.lastName,'testlastName' );
  I.fillField(registerPage.phone,'11111111111' );
  I.fillField(registerPage.email,'abc@gmail.com' );
  I.fillField(registerPage.address,'test Address' );
  I.fillField(registerPage.city,'melbourne' );
  I.fillField(registerPage.state,'VIC' );
  I.fillField(registerPage.postcode,'3000' );
  I.click('//tbody/tr[12]/td[2]/select');
  I.click('//tbody/tr[12]/td[2]/select/option[13]');
  I.fillField(registerPage.username,'testabc' );
  I.fillField(registerPage.password,'testabcd' );
  I.fillField(registerPage.confPassword,'testabcd' );
  var username = I.grabTextFrom(registerPage.username).toString();
});

When('I click submit', () => {
    I.click('//table/tbody/tr[18]/td/input');

});

Then('I can see my correct username on the page', () => {
  var confirmationText = I.grabTextFrom('//tbody/tr[3]/td/p[3]/a/font/b').toString();
  assert.containsAllKeys(confirmationText,username)
});
