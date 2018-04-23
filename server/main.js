import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var bugsnag = require("bugsnag");

  bugsnag.register("33cf7f73bd4995905ad84290bd54df25");
  bugsnag.notify(new Error("Non-fatal"));
});
