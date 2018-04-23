import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import bugsnag from 'bugsnag-js'
const bugsnagClient = bugsnag({
  apiKey: '33cf7f73bd4995905ad84290bd54df25',
  appVersion: "1.2.3"
});
// handled error wich reports to bugsnag.
bugsnagClient.notify("heyo!!!!!");

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    var num = 1
    // deliberate Type Error which will report to Bugsnag, but does not crash the app.
    num.toUpperCase()
  },
});
