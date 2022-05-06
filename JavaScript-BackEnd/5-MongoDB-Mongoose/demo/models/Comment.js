const { Schema, model} = require('mongoose');

const commentSchema = new Schema({
  author: String,
  content: {type: String, minlength: 3}
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;