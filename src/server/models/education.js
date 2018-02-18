var mongoose = require('mongoose');

var course = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: String,
  tagline: String,
  technologies: [String]
});

var education = new mongoose.Schema({
  updatedAt: Date,
  institution: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  url: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  description: String,
  city: String,
  country: String,
  courses: {
    type: [course],
  },
});

education.pre('save', function (next) {
  this.updatedAt = Date();
  next();
});

module.exports = mongoose.model('Education', education);
