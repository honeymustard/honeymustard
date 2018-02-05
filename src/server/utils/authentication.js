/**
 * Authentication for users.
 */
function authenticate(req, res, next) {
  if (req.session && req.session.user === 'horse') {
    return next();
  } else {
    return res.sendStatus(401);
  }
}

module.exports = { authenticate };
