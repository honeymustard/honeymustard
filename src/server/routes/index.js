var express = require('express');
var jobs = require('./jobs');
var projects = require('./projects');
var router = express.Router();

router.use(jobs);
router.use(projects);

module.exports = router;
