var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var JobController = require('../controllers/jobController');
var controller = new JobController();

// Public routes
router.get('/jobs', controller.get);
router.get('/jobs/:id', controller.getByID);

// Private routes
router.post('/jobs', authenticate, controller.post);
router.patch('/jobs/:id', authenticate, controller.patchByID);

module.exports = router;
