var getMessages = require('../utils/errors');
var Certification = require('../models/certification');

class CertificationController {

  post(req, res) {
    var newCertification = new Certification(req.query);
    newCertification.save((error, item) => {
      if (error) {
        res.status(500).json(getMessages(error));
      } else {
        res.status(200).json(item);
      }
    });
  }

  get(req, res) {
    let limit = req.limit || 0;

    Certification
      .find({})
      .sort({'date': -1})
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
    Certification.findById(req.params.id, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find certification');
      }
    });
  }

  patchByID(req, res) {
    Certification.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find certification');
      }
    });
  }
}

module.exports = CertificationController;
