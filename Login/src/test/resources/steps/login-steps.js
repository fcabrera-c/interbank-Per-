Given(/^we access on the login page$/, function() {
  browser.get("https://bancaporinternet.interbank.pe/login#/login");
  browser.configure().window().maximize();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(3, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we capture all data of the login page fields$/, function() {
  $("#25").click();
  $("#25").sendKeys("4452900102030466");
  $("#39").sendKeys("44529001");
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(3, timeUnits.SECONDS);
  //$("#46").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div").moveTo();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(16)").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(14)").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(24)").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(16)").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(9)").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(8)").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > button").click();
}); 
Given(/^we capture the second option$/, function() {
  $("#documentType > div > div > i").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#documentType > ul > li:nth-child(2)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#39").sendKeys("44529002");
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Given(/^we capture the thirth option$/, function() {
  $("#documentType > div > div > i").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#documentType > ul > li:nth-child(3)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#39").sendKeys("TE529003003");
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(3, timeUnits.SECONDS);
});

When(/^we select the password field$/, function() {
  $("#46").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(16)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(14)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(24)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(16)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(9)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div:nth-child(2) > div > div.ibk-keyboard-virtual > div > div > div > a:nth-child(8)").click();
  //$("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > button").click();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
});
Then(/^we select the check box Recordar datos$/, function() {
  $("#app > div.login.login--ctn.ibk-login-layout-layout.ibk-login-layout__background-blur > div.ibk-login-layout__background > div.ibk-login-layout__wrapper > div.ibk-login-layout__page-nav > div > div > div > div.ibk-auth-box-body > div > div.ibk-ui-checkbox > label > span.mdl-checkbox__box-outline > span").click();
});

