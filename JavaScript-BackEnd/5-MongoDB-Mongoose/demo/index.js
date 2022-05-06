const mongoose = require('mongoose');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const connectionString = 'mongodb://localhost:27017/testDB';

start();

async function start() {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  console.log('Database connected');

  // const comment = await Comment.findOne({author: 'Mike'});
  // const post = await Post.findOne();
  // post.comments.push(comment);

  // post.save();

  const post = await Post.findOne().populate('comments', 'content');
  console.log(post);
}