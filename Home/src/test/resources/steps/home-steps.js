Given(/^we access on the home page$/, function() {
  browser.get("https://interbank.pe/");
  browser.configure().window().maximize();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(5, timeUnits.SECONDS);
});
Given(/^we validate all sections of the page$/, function() {
  $(":root").waitTime(5, timeUnits.SECONDS);
  $("#p_p_id_56_INSTANCE_VAvq3YGSL62w_ > div > div > div.journal-content-article > div").scrollIntoView();
  $(":root").waitTime(3, timeUnits.SECONDS);
  $("#cta-bar__content-js > div.lh-cta-bar__content").scrollIntoView();
  $(":root").waitTime(3, timeUnits.SECONDS);
  $("#p_p_id_56_INSTANCE_apC6xMhAPCrE_ > div > div > div.journal-content-article").scrollIntoView();
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Then(/^we validate the Footer section$/, function() {
  $("body > div.lq-body-wrapper > footer > div.lh-footer-top").scrollIntoView();
});