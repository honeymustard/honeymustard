var express = require('express');
var router = express.Router();
var { authenticate } = require('../utils/authentication');
var PostController = require('../controllers/postController');
var controller = new PostController();

// Public routes
router.get('/posts', controller.get);
router.get('/posts/:id', controller.getByID);

// Private routes
router.post('/posts', authenticate, controller.post);
router.patch('/posts/:id', authenticate, controller.patchByID);

module.exports = router;
