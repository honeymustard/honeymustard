let secrets = require('../../../secrets');

/**
 * Authentication controller
 */
class AuthController {
  login(req, res) {
    if (!req.query.user || !req.query.pass) {
      return res.status(401).send('Missing username or password');
    } else if (req.query.user === secrets.user && req.query.pass ===
      secrets.pass) {
      req.session.user = secrets.user;
      return res.status(200).send('Logged in');
    }

    return res.status(401).send('Login failed');
  }

  logout(req, res) {
    req.session.destroy();
    return res.status(200).send('Logged out');
  }
}

module.exports = AuthController;
