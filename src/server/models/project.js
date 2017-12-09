var mongoose = require('mongoose');

var project = new mongoose.Schema({
    created: Date,
    modified: Date,
    title: {
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

project.pre('save', (next) => {

    var now = Date();
    this.modified = now;

    if (!this.created) {
        this.created = now;
    }

    next();
});

module.exports = mongoose.model('project', project);
