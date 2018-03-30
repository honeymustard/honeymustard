var getMessages = require('../utils/errors');
var Education = require('../models/education');

class EducationController {

  post(req, res) {
    var newEducation = new Education(req.query);
    newEducation.save((error, item) => {
      if (error) {
        res.status(500).json(getMessages(error));
      } else {
        res.status(200).json(item);
      }
    });
  }

  get(req, res) {
    let limit = parseInt(req.query.limit || 0);

    Education
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
    Education.findById(req.params.id, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find education');
      }
    });
  }

  patchByID(req, res) {
    Education.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find education');
      }
    });
  }
}

module.exports = EducationController;
