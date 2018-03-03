var mongoose = require('mongoose');

var project = new mongoose.Schema({
    updatedAt: Date,
    title: {
        type: String,
        required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    license: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    repository: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    description: String,
});

project.pre('save', function (next) {
    this.updatedAt = Date();
    next();
});

module.exports = mongoose.model('project', project);
