var Post = require('./model.js');

var express = require('express');
var router = express.Router();

////Create Test Post
// var test = new Post({
//     "title": "Little Lentil Looper",
//     "author": "Jenga Jingo",
//     "image": "http://www.medicalnewstoday.com/content/images/articles/297/297638/groups-of-lentils.jpg",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eligendi assumenda, aperiam alias illo ab ipsum accusantium debitis laudantium, aspernatur obcaecati tenetur, praesentium ducimus optio asperiores non incidunt ipsa quam.",
//     "date": "03/18/2016",
//     "votes": 8,
//     "comments": [
//       {
//         "author": "Idiot",
//         "text": "Sweet Beans, bro"
//       }
//     ],
//     "commentsVisible": false,
//     "newCommentVisible": false
//   });

// test.save(function(err){
//   if (err) throw err;

//   console.log('Added Post!!!');
// });

router.get('/',function(req, res, next){
  Post.find( {}, function(err, post) {
    if (err) throw err;

    // object of the user
    console.log(post);
    res.json(post);
  });
});

router.post('/',function(req, res, next){
  var post = new Post({
    "title": req.body.title,
    "author": req.body.author,
    "image": req.body.description,
    "date": req.body.date,
    "votes": 0,
    "comments": [],
    "commentsVisible": false,
    "newCommentVisible": false
  });

  post.save(function(err){
    if (err) throw err;

    console.log('Added Post!!!');
    res.json('Added Post!!!');
  });
  // Post.findOne( {}, function(err, post) {
  //   if (err) throw err;

  //   // object of the user
  //   console.log(post);
  //   res.json(post);
  // });
});

router.post('/upvote/:post_id', function(req, res, next){
  Post.findById(req.params.post_id, function(err, post){
    if (err) throw err;

    post.votes += 1;

    post.save(function(err){
      if (err) throw err;

      console.log('User successfully updated!');
      res.json('User successfully updated!');
    });
  });
});

router.post('/downvote/:post_id', function(req, res, next){
  Post.findById(req.params.post_id, function(err, post){
    if (err) throw err;

    post.votes -= 1;

    post.save(function(err){
      if (err) throw err;

      console.log('User successfully updated!');
      res.json('User successfully updated!');
    });
  });
});

router.post('/comment/:post_id', function(req, res, next){

  Post.findById(req.params.post_id, function(err, post){
    if (err) throw err;

    post.comments.push(req.body);

    post.save(function(err){
      if (err) throw err;

      console.log('User successfully updated!');
      res.json('User successfully updated!');
    });
  });
});

module.exports = router;