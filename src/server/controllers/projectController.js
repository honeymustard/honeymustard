var Project = require('../models/project');

/**
 * Get a simple list of errors.
 */
function getErrors(err) {
    var list = [];
    for (e in err.errors) {
        list.push(err.errors[e].message);
    }
    return list;
}

class ProjectController {
    post() {
        return (req, res) => {
            var project = new Project(req.query);
            project.save((err, item) => {
                if (err) {
                    res.status(500).json(getErrors(err));
                } else {
                    res.status(200).json(item);
                }
            });
        };
    }

    get() {
        return (req, res) => {
            Project.find((err, items) => {
                if (err) {
                    res.status(500).json(getErrors(err));
                } else {
                    res.status(200).json(items);
                }
            });
        };
    }

    getByID() {
        return (req, res) => {
            Project.findById(req.params.id, (err, item) => {
                if (item) {
                    res.status(200).json(item);
                } else {
                    res.status(404).json('Could not find project');
                }
            });
        };
    }

    patchByID() {
        return (req, res) => {
            Project.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (err, item) => {
                if (item) {
                    res.status(200).json(item);
                } else {
                    res.status(404).json('Could not find project');
                }
            });
        };
    }
}

module.exports = ProjectController;
