import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Open (.*) webpage$/, async function(portal:string){
  await browser.url(portal);
});

When(/^Search for the text (.*)$/, async function(text:string) {
  let element = await $('input[title="Search"]');
  await element.setValue(text);
  await browser.keys('Enter');
});

When(/^Click on the first element$/, async function() {
  let element = await $('<h3>');
  await element.click();
});

Then(/^(.*) page should load$/, async function(portal:string) {
  chai.expect(await browser.getUrl()).to.contains(portal);
});