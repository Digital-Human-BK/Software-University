const { Schema, model, Types: { ObjectId } } = require('mongoose');

const postSchema = new Schema({
  author: { type: String, required: true},
  title: { type: String, required: true, minlength: 10 },
  content: { type: String, required: true },
  comments: { type: [ObjectId], default: [], ref: 'Comment' }
});

const Post = model('Post', postSchema);

module.exports = Post;