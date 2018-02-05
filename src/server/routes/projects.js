var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var ProjectController = new require('../controllers/projectController');
var controller = new ProjectController();

// Public routes
router.route('/projects').get(controller.get);
router.route('/projects/:id').get(controller.getByID);

// Private routes
router.use(authenticate);
router.route('/projects').post(controller.post);
router.route('/projects/:id').patch(controller.patchByID);

module.exports = router;
