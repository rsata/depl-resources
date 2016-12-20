const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const auth = require('./secrets');

const googleClientID = auth.google.google_Client_ID;
const googleClientSecret = auth.google.google_Client_Secret;
const googleCallbackURL = auth.google.google_CallbackURL;

// app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

const user = null;

passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: googleCallbackURL
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      console.log(profile);
      user = profile;
      return done(null, profile);
    // User.findOne({ 'google.id': profile.id }, function(err, user) {
    //   if (err)
    //   return done(err);
    //   if (user) {
    //     return done(null, user);
    //   } else {
    //     var newUser = new User();
    //     newUser.google.id = profile.id;
    //     newUser.google.token = token;
    //     newUser.google.name = profile.displayName;
    //     newUser.google.email = profile.emails[0].value;
    //     newUser.save(function(err) {
    //       if (err)
    //       throw err;
    //       return done(null, newUser);
    //     });
    //   }
    // });
    });
  })
);


app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'] }));

app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

app.get('/profile', (req, res, next) => {
  res.send('sup');
});

// app.get('/auth/google', passport.authenticate('google',
//     { scope: ['https://www.googleapis.com/auth/userinfo.profile',
//       'https://www.googleapis.com/auth/userinfo.email'] }),
//     function(req, res){} // this never gets called
// );

// app.get('/auth/google', passport.authenticate('google',
//     { scope: ['https://www.googleapis.com/auth/calendar'] }),
//     function(req, res){} // this never gets called
// );

// app.get('/oauth2callback', passport.authenticate('google',
//     { successRedirect: '/api', failureRedirect: '/login' }
// ));

// function ensureAuthenticated(req, res, next) {
//   console.log(req, res, next);
//   if (req.isAuthenticated()) { return next(); }
//   res.sendStatus(401);
// }
//
// app.get('/profile', ensureAuthenticated, function(req, res) {
//   res.json({ message: 'Hooray! welcome to our api!' });
// }
// );

app.listen(process.env.PORT || 3001);
