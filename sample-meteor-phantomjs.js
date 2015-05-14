if (Meteor.isClient) {
  Template.part1.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log(process.env.PATH);
    // code to run on server at startup
  });
}
