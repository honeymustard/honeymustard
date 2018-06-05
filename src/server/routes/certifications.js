let express = require('express');
let { authenticate } = require('../utils/authentication');
let CertificationController = require('../controllers/certificationController');

let router = express.Router();
let controller = new CertificationController();

// Public routes
router.get('/certifications', controller.get);
router.get('/certifications/:id', controller.getByID);

// Private routes
router.post('/certifications', authenticate, controller.post);
router.patch('/certifications/:id', authenticate, controller.patchByID);

module.exports = router;
