(function () {
  'use strict';

  angular
    .module('articles.services')
    .factory('ArticlesHttpService', ArticlesHttpService);

  ArticlesHttpService.$inject = ['$http','$state'];

  function ArticlesHttpService($http, $state) {
    return {
      clone: function(articleId){
        return $http({
          method: 'POST',
          url: '/api/articles/' + articleId + '/clone'
        }).then(function successCallback(response) {
          $state.reload();
        }, function errorCallback(response) {

        });
      }
    };
  }
})();
