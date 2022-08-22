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

When(/^User click on (.*)$/, async function(param:string) {
  if( param === 'big_play'){
    // let big_play_button = await $(`button[class='vjs-big-play-button']`);
    // await big_play_button.click();
  } else if(param === 'play'){
    let play_button = await $(`button[title='Play']`);
    await play_button.click();
  } else {
    let pause_button = await $(`button[title='Pause']`);
    await pause_button.click();
  }
});

When(/^Wait for (.*) second[|s]$/, async function(seconds:number) {
  await browser.pause(seconds * 1000);
});