if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log(process.env.PATH);
    // code to run on server at startup
  });
}
