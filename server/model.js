var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var postSchema = new Schema({
    "title": String,
    "author": String,
    "image": String,
    "description": String,
    "date": Date,
    "votes": Number,
    "comments": [
      {
        "author": String,
        "text": String
      }
    ],
    "commentsVisible": Boolean,
    "newCommentVisible": Boolean
  });


// the schema is useless so far
// we need to create a model using it
var Post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
module.exports = Post;