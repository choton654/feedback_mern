const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Survey = require('../models/Survey');
const Mailer = require('../services/mailer');
const template = require('../services/template');

module.exports = (server) => {
  server.get('/api/surveys', (req, res) => {
    res.send('Thanks for voating!!');
  });

  server.post(
    '/api/surveys',
    requireLogin,
    requireCredits,
    async (req, res) => {
      try {
        const { title, body, subject, recipients } = req.body;

        const survey = new Survey({
          title,
          body,
          subject,
          recipients: recipients
            .split(',')
            .map((email) => ({ email: email.trim() })),
          user: req.user.id,
          dateSent: Date.now(),
        });

        const mailer = new Mailer(survey, template(survey));
        await mailer.send();
        await survey.save();

        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);
      } catch (error) {
        console.error(error);
        res.status(422).json({ error });
      }
    },
  );
};
