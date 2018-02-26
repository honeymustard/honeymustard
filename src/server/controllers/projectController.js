var getMessages = require('../utils/errors');
var Project = require('../models/project');

class ProjectController {

  post(req, res) {
    var project = new Project(req.query);
    project.save((error, item) => {
      if (error) {
        res.status(500).json(getMessages(error));
      } else {
        res.status(200).json(item);
      }
    });
  }

  get(req, res) {
    let limit = req.limit || 0;

    Project
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
    Project.findById(req.params.id, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find project');
      }
    });
  }

  patchByID(req, res) {
    Project.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find project');
      }
    });
  }
}

module.exports = ProjectController;
