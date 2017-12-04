var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Job = require('./src/models/job');
var app = express();

mongoose.connect('mongodb://honeymustard:43ApplTree@ds127126.mlab.com:27126/honeymustard', {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var router = express.Router();

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

router.route('/jobs')
    .post((req, res) => {
        var newJob = new Job(req.query);
        newJob.save((err, job) => {
            if (err) {
                res.status(500).json(getErrors(err));
            } else {
                res.status(200).json(job);
            }
        });
    })
    .get((req, res) => {
        Job.find((err, jobs) => {
            if (err) {
                res.status(500).json(getErrors(err));
            } else {
                res.status(200).json(jobs);
            }
        });
    });

router.route('/jobs/:id')
    .get((req, res) => {
        Job.findById(req.params.id, (err, job) => {
            if (job) {
                res.status(200).json(job);
            } else {
                res.status(404).json('Could not find job');
            }
        });
    })
    .patch((req, res) => {
        Job.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (err, job) => {
            if (job) {
                res.status(200).json(job);
            } else {
                res.status(404).json('Could not find job');
            }
        });
    });

/* Serve data from api */
app.use('/api', router);

/* Serve all files from dist folder */
app.use('/dist', express.static(path.join(__dirname, '/dist')));

/* The frontend will handle other requests */
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
