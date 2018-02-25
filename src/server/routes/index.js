var express = require('express');
var jobs = require('./jobs');
var projects = require('./projects');
var education = require('./education');
var certifications = require('./certifications');
var auth = require('./auth');
var router = express.Router();

router.use('/api', jobs);
router.use('/api', projects);
router.use('/api', education);
router.use('/api', certifications);
router.use('/account', auth);

module.exports = router;
