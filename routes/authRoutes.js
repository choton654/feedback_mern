const passport = require('passport');

module.exports = (server) => {
  server.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  server.get('/auth/google/secrets', passport.authenticate('google'));

  server.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  server.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
