let express = require('express');
let { authenticate } = require('../utils/authentication');
let PostController = require('../controllers/postController');

let router = express.Router();
let controller = new PostController();

// Public routes
router.get('/posts', controller.get);
router.get('/posts/:id', controller.getByID);

// Private routes
router.post('/posts', authenticate, controller.post);
router.patch('/posts/:id', authenticate, controller.patchByID);

module.exports = router;
