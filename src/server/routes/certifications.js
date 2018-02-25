var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var CertificationController = require('../controllers/certificationController');
var controller = new CertificationController();

// Public routes
router.get('/certifications', controller.get);
router.get('/certifications/:id', controller.getByID);

// Private routes
router.post('/certifications', authenticate, controller.post);
router.patch('/certifications/:id', authenticate, controller.patchByID);

module.exports = router;
