const keys = require('../config/keys');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireLogin = require('../middleware/requireLogin');

module.exports = (server) => {
  server.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'inr',
        source: req.body.id,
        description: 'My First Test Charge (created for API docs)',
      });

      req.user.credits += 5;
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      console.error(error);
    }
  });
};
