let getMessages = require('../utils/errors');
let Certification = require('../models/certification');

class CertificationController {
  post(req, res) {
    let newCertification = new Certification(req.query);
    newCertification.save((error, item) => {
      if (error) {
        res.status(500).json(getMessages(error));
      } else {
        res.status(200).json(item);
      }
    });
  }

  get(req, res) {
    let limit = parseInt(req.query.limit || 0, 10);

    Certification
      .find({})
      .sort({ date: -1 })
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
    Certification.findByIdAndUpdate(
      req.params.id,
      { $set: req.query },
      { new: true },
      (error, item) => {
        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json('Could not find certification');
        }
      },
    );
  }
}

module.exports = CertificationController;
