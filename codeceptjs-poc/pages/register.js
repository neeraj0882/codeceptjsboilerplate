/// <reference path="./steps.d.ts" />
const I = actor();

module.exports = {

    // setting locators
    firstName:'//table/tbody/tr[2]/td[2]/input',
    lastName:'//table/tbody/tr[3]/td[2]/input',
    phone:'//table/tbody/tr[4]/td[2]/input',
    email:'//table/tbody/tr[5]/td[2]/input',
    address:'//table/tbody/tr[7]/td[2]/input',
    city:'//table/tbody/tr[9]/td[2]/input',
    state:'//table/tbody/tr[10]/td[2]/input',
    postcode:'//table/tbody/tr[11]/td[2]/input',
    country:'//table/tbody/tr[12]/td[2]/select',
    username:'//*[@id="email"]',
    password:'//table/tbody/tr[15]/td[2]/input',
    confPassword:'//table/tbody/tr[16]/td[2]/input',
}
