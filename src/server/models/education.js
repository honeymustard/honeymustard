let mongoose = require('mongoose');

let course = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: String,
  tagline: String,
  technologies: [String],
});

let education = new mongoose.Schema({
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
  tagline: String,
  city: String,
  country: String,
  technologies: [String],
  courses: {
    type: [course],
  },
});

education.pre('save', (next) => {
  this.updatedAt = Date();
  next();
});

module.exports = mongoose.model('Education', education);
