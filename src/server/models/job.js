var mongoose = require('mongoose');

var job = new mongoose.Schema({
    created: Date,
    modified: Date,
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

job.pre('save', (next) => {

    var now = Date();
    this.modified = now;

    if (!this.created) {
        this.created = now;
    }

    next();
});

module.exports = mongoose.model('Job', job);
