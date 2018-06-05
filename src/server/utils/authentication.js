let secrets = require('../../../secrets');

/**
 * Authentication for users.
 */
function authenticate(req, res, next) {
  if (req.session && req.session.user === secrets.user) {
    return next();
  }

  return res.sendStatus(401);
}

module.exports = { authenticate };
