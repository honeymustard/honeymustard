let mongoose = require('mongoose');

let post = new mongoose.Schema({
  updatedAt: Date,
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
    required: true,
  },
  postType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
});

post.pre('save', (next) => {
  this.updatedAt = Date();
  next();
});

module.exports = mongoose.model('Post', post);
