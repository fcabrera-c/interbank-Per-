Given(/^I'm at home page$/, function() {
  browser.get("https://interbank.pe/");
  browser.configure().window().maximize();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(5, timeUnits.SECONDS);
});
Given(/^I select the searching option$/, function() {
  $("body > header > div > div.lh-gh__search.lq-gh__search > div.lh-gh__search__lens").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
});

When(/^I search something$/, function() {
  $("#lq-autocomplete").click();
  $("#lq-autocomplete").sendKeys("t");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lq-autocomplete").sendKeys("a");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lq-autocomplete").sendKeys("r");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lq-autocomplete").sendKeys("j");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lq-autocomplete").sendKeys("e");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lq-autocomplete").sendKeys("t");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lq-autocomplete").sendKeys("a");
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#lq-autocomplete").sendKeys("s");
  $(":root").waitTime(2, timeUnits.SECONDS);
});

Then(/^I see the results$/, function() {
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#p_p_id_motorbusqueda_WAR_motorbusquedaportlet_INSTANCE_Motor7JE3_ > div > div > div > div.quick-search > div:nth-child(5) > ul > li.link.pos-9 > div > a").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#p_p_id_motorbusqueda_WAR_motorbusquedaportlet_INSTANCE_Motor7JE3_ > div > div > div > div.quick-search > div:nth-child(5) > ul > li.link.pos-9 > div > a").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#containerFiltroCategoria > div > div > div").scrollIntoView();
 
});  
