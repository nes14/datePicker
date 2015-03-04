Meteor.startup(function () {
  smtp = {
    username: 'realcolvin@gmail.com',   // eg: server@gentlenode.com
    password: 'tZgWXULolI1d',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

// (server-side)
Meteor.startup(function() {
  Accounts.emailTemplates.from = 'Gentlenode <no-reply@gentlenode.com>';

  Accounts.emailTemplates.siteName = 'Gentlenode Studio';

  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address';
  };

  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'click on the following link to verify your email address: ' + url;
  };
});

// (server-side)
Accounts.onCreateUser(function(options, user) {
  user.profile = {};

  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;
});
