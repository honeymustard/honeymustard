var express = require('express');
var router = express.Router();
var JobController = require('../controllers/jobController');
var controller = new JobController();

router.route('/jobs').post(controller.post());
router.route('/jobs').get(controller.get());
router.route('/jobs/:id').get(controller.getByID());
router.route('/jobs/:id').patch(controller.patchByID());

module.exports = router;
