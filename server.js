const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const passport = require('passport');
const cookieSession = require('cookie-session');
const connectDb = require('./utils/dbConnect');
require('./services/passport');

connectDb();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_KEY],
    }),
  );

  server.use(passport.initialize());
  server.use(passport.session());

  require('./routes/authRoutes')(server);
  require('./routes/billingRoutes')(server);
  require('./routes/surveyRoutes')(server);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
