var express = require('express');
var router = express.Router();
var Project = require('../models/job');

/**
 * Get a simple list of errors.
 */
function getErrors(err) {
    var list = [];
    for (e in err.errors) {
        list.push(err.errors[e].message);
    }
    return list;
}

router.route('/projects')
    .post((req, res) => {
        var project = new Project(req.query);
        project.save((err, job) => {
            if (err) {
                res.status(500).json(getErrors(err));
            } else {
                res.status(200).json(job);
            }
        });
    })
    .get((req, res) => {
        Project.findOne((err, jobs) => {
            if (err) {
                res.status(500).json(getErrors(err));
            } else {
                res.status(200).json(jobs);
            }
        });
    });

router.route('/projects/:id')
    .get((req, res) => {
        Project.findById(req.params.id, (err, job) => {
            if (job) {
                res.status(200).json(job);
            } else {
                res.status(404).json('Could not find job');
            }
        });
    })
    .patch((req, res) => {
        Project.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (err, job) => {
            if (job) {
                res.status(200).json(job);
            } else {
                res.status(404).json('Could not find job');
            }
        });
    });

module.exports = router;
