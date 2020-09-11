const Survey = require('../models/Survey');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="trxt-align: center">
          <h3>I'd like your input</h3>
          <p>please answer the following question</p>
          <p>${survey.body}</p>
          <div>
            <a href="${process.env.REDIRECT_DOMAIN}api/surveys">Yes</a>
          </div>
          <div>
            <a href="${process.env.REDIRECT_DOMAIN}api/surveys">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
