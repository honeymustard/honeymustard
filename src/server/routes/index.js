let express = require('express');
let posts = require('./posts');
let jobs = require('./jobs');
let projects = require('./projects');
let education = require('./education');
let certifications = require('./certifications');
let auth = require('./auth');

let router = express.Router();

router.use('/api', posts);
router.use('/api', jobs);
router.use('/api', projects);
router.use('/api', education);
router.use('/api', certifications);
router.use('/account', auth);

module.exports = router;
