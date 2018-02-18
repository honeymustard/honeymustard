var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var EducationController = require('../controllers/educationController');
var controller = new EducationController();

// Public routes
router.get('/education', controller.get);
router.get('/education/:id', controller.getByID);

// Private routes
router.post('/education', authenticate, controller.post);
router.patch('/education/:id', authenticate, controller.patchByID);

module.exports = router;
