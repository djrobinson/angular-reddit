angular
    .module('RedditApp')
    .controller('PostCtrl', PostCtrl);

PostCtrl.$inject = ['postService'];

function PostCtrl(postService){
  var vm = this;
  vm.newComment = false;

  vm.posts = [];

  getPosts();
  function getPosts() {
    return postService.getPosts()
    .then(function(data) {
      vm.posts = data;
      return vm.posts;
    });
  }

  vm.createPost = function(){
    var inputs = vm.newPost;
    return postService.createPost(inputs)
    .then(function(data){
      getPosts();
    });
  };

  vm.upVote = function(data){
    return postService.upVote(data)
    .then(function(data) {
      console.log(data);
      getPosts();
      return vm.posts;
    });
  };

  vm.downVote = function(data){
    return postService.downVote(data)
    .then(function(data) {
      console.log(data);
      getPosts();
      return vm.posts;
    });
  };

  vm.addComment = function(data){
    var inputs = vm.newComment[data];
    return postService.createComment(inputs, data)
    .then(function(data){
      getPosts();
    });
  };
}