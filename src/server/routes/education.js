var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var EducationController = require('../controllers/educationController');
var controller = new EducationController();

// Public routes
router.route('/education').get(controller.get);
router.route('/education/:id').get(controller.getByID);

// Private routes
router.use(authenticate);
router.route('/education').post(controller.post);
router.route('/education/:id').patch(controller.patchByID);

module.exports = router;
