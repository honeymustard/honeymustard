let express = require('express');
let AuthController = require('../controllers/auth');

let router = express.Router();
let controller = new AuthController();

router.route('/login').post(controller.login);
router.route('/logout').get(controller.logout);

module.exports = router;
