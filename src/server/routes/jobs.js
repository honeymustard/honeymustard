var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var JobController = require('../controllers/jobController');
var controller = new JobController();

// Public routes
router.route('/jobs').get(controller.get);
router.route('/jobs/:id').get(controller.getByID);

// Private routes
router.use(authenticate);
router.route('/jobs').post(controller.post);
router.route('/jobs/:id').patch(controller.patchByID);

module.exports = router;
