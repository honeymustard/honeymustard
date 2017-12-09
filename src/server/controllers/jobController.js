var Job = require('../models/job');

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

class JobController {

    post() {
        return (req, res) => {
            var newJob = new Job(req.query);
            newJob.save((err, item) => {
                if (err) {
                    res.status(500).json(getErrors(err));
                } else {
                    res.status(200).json(item);
                }
            });
        };
    }

    get() {
        return (req, res) => {
            Job.find((err, items) => {
                if (err) {
                    res.status(500).json(getErrors(err));
                } else {
                    res.status(200).json(items);
                }
            });
        };
    }

    getByID() {
        return (req, res) => {
            Job.findById(req.params.id, (err, item) => {
                if (item) {
                    res.status(200).json(item);
                } else {
                    res.status(404).json('Could not find job');
                }
            });
        }
    }

    patchByID() {
        return (req, res) => {
            Job.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (err, item) => {
                if (item) {
                    res.status(200).json(item);
                } else {
                    res.status(404).json('Could not find job');
                }
            });
        };
    }
}

module.exports = JobController;
