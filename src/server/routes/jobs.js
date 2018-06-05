let express = require('express');
let { authenticate } = require('../utils/authentication');
let JobController = require('../controllers/jobController');

let router = express.Router();
let controller = new JobController();

// Public routes
router.get('/jobs', controller.get);
router.get('/jobs/:id', controller.getByID);

// Private routes
router.post('/jobs', authenticate, controller.post);
router.patch('/jobs/:id', authenticate, controller.patchByID);

module.exports = router;
