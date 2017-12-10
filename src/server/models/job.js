var mongoose = require('mongoose');

var job = new mongoose.Schema({
    updatedAt: Date,
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: Date,
    technologies: {
        type: [String],
    },
    url: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    description: String,
    city: String,
    country: String,
});

job.pre('save', function (next) {
    this.updatedAt = Date();
    next();
});

module.exports = mongoose.model('Job', job);
