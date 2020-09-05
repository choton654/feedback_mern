const passport = require('passport');

module.exports = (server) => {
  server.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  server.get('/auth/google/secrets', passport.authenticate('google'));
};
