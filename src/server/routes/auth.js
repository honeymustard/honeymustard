var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/authController');
var controller = new AuthController();

router.route('/login').get(controller.login);
router.route('/logout').get(controller.logout);

module.exports = router;
