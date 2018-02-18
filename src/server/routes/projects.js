var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var ProjectController = new require('../controllers/projectController');
var controller = new ProjectController();

// Public routes
router.get('/projects', controller.get);
router.get('/projects/:id', controller.getByID);

// Private routes
router.post('/projects', authenticate, controller.post);
router.patch('/projects/:id', authenticate, controller.patchByID);

module.exports = router;
