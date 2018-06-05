let express = require('express');
let { authenticate } = require('../utils/authentication');
let EducationController = require('../controllers/education');

let router = express.Router();
let controller = new EducationController();

// Public routes
router.get('/education', controller.get);
router.get('/education/:id', controller.getByID);

// Private routes
router.post('/education', authenticate, controller.post);
router.patch('/education/:id', authenticate, controller.patchByID);

module.exports = router;
