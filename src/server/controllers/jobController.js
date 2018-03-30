var getMessages = require('../utils/errors');
var Job = require('../models/job');

class JobController {

  post(req, res) {
    var newJob = new Job(req.query);
    newJob.save((error, item) => {
      if (error) {
        res.status(500).json(getMessages(error));
      } else {
        res.status(200).json(item);
      }
    });
  }

  get(req, res) {
    let limit = parseInt(req.query.limit || 0);

    console.log(limit);
    Job
      .find({})
      .sort({'startDate': -1})
      .limit(limit)
      .exec((error, items) => {
        if (error) {
          res.status(500).json(getMessages(error));
        } else {
          res.status(200).json(items);
        }
      });
  }

  getByID(req, res) {
    Job.findById(req.params.id, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find job');
      }
    });
  }

  patchByID(req, res) {
    Job.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find job');
      }
    });
  }
}

module.exports = JobController;
