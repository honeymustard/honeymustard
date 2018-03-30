var getMessages = require('../utils/errors');
var Post = require('../models/post');

class PostController {

  post(req, res) {
    var newPost = new Post(req.query);
    newPost.save((error, item) => {
      if (error) {
        res.status(500).json(getMessages(error));
      } else {
        res.status(200).json(item);
      }
    });
  }

  get(req, res) {
    let limit = parseInt(req.query.limit || 0);

    Post
      .find({})
      .sort({'postDate': -1})
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
    Post.findById(req.params.id, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find post');
      }
    });
  }

  patchByID(req, res) {
    Post.findByIdAndUpdate(req.params.id, {$set: req.query}, {new: true}, (error, item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json('Could not find post');
      }
    });
  }
}

module.exports = PostController;
