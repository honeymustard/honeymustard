/**
 * Authentication controller
 */
class AuthController {

  login(req, res, next) {
    if (!req.query.user || !req.query.pass) {
      return res.status(401).send('Missing username or password');
    } else if (req.query.user === 'horse' && req.query.pass === 'apples') {
      req.session.user = 'horse';
      return res.status(200).send('Logged in');
    }

    return res.status(401).send('Login failed');
  }

  logout(req, res, next) {
    req.session.destroy();
    return res.status(200).send('Logged out');
  }
}

module.exports = AuthController;
