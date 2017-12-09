var express = require('express');
var router = express.Router();
var ProjectController = new require('../controllers/projectController');

var controller = new ProjectController();

router.route('/projects').post(controller.post());
router.route('/projects').get(controller.get());
router.route('/projects/:id').get(controller.getByID());
router.route('/projects/:id').patch(controller.patchByID());

module.exports = router;
