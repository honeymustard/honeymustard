let express = require('express');
let { authenticate } = require('../utils/authentication');
let ProjectController = require('../controllers/project');

let router = express.Router();
let controller = new ProjectController();

// Public routes
router.get('/projects', controller.get);
router.get('/projects/:id', controller.getByID);

// Private routes
router.post('/projects', authenticate, controller.post);
router.patch('/projects/:id', authenticate, controller.patchByID);

module.exports = router;
