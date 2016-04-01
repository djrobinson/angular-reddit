angular
  .module('RedditApp')
  .factory('postService', postService);

postService.$inject = ['$http'];


function postService($http) {
  return {
    getPosts: getPosts,
    createPost: createPost,
    upVote: upVote,
    createComment: createComment
  };

  function getPosts() {
    return $http.get('/posts')
      .then(getCompletedRes)
      .catch(getFailedRes);

    function getCompletedRes(response) {
      return response.data;
    }

    function getFailedRes(error) {
      console.log('XHR Failed for createPost.' + error.data);
    }
  }

  function createPost(data) {
    console.log(data, "DATA!!!");

    return $http.post('/posts', data)
      .then(getCompletedRes)
      .catch(getFailedRes);

    function getCompletedRes(response) {
      return response.data;
    }

    function getFailedRes(error) {
      console.log('XHR Failed for createPost.' + error.data);
    }
  }

  function upVote(data){
    return $http.post('/posts/upvote/'+ data)
      .then(getCompletedRes)
      .catch(getFailedRes);

    function getCompletedRes(response) {
      console.log(response.data);
      return response.data;
    }

    function getFailedRes(error) {
      console.log('XHR Failed for createPost.' + error.data);
    }
  }

  function createComment(input, data){
    return $http.post('/posts/comment/'+data, input)
      .then(getCompletedRes)
      .catch(getFailedRes);

    function getCompletedRes(response) {
      console.log(response.data);
      return response.data;
    }

    function getFailedRes(error) {
      console.log('XHR Failed for createPost.' + error.data);
    }
  }
}