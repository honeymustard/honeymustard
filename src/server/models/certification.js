let mongoose = require('mongoose');

let certification = new mongoose.Schema({
  updatedAt: Date,
  name: {
    type: String,
    required: true,
  },
  authority: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  tagline: String,
  date: {
    type: Date,
    required: true,
  },
  expires: Date,
  url: {
    type: String,
    required: true,
  },
  certificateUrl: String,
  license: String,
  technologies: [String],
});

certification.pre('save', (next) => {
  this.updatedAt = Date();
  next();
});

module.exports = mongoose.model('Certification', certification);
