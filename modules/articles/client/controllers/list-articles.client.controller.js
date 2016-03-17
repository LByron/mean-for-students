(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticlesListController', ArticlesListController);

  ArticlesListController.$inject = ['ArticlesService','ArticlesHttpService'];

  function ArticlesListController(ArticlesService, ArticlesHttpService) {
    var vm = this;

    vm.articles = ArticlesService.query();

    vm.copy = function($event, article) {
      ArticlesHttpService.clone(article._id)
          .then(function successCallback(response) {
           // $state.reload();
          }, function errorCallback(response) {

          });
    };
  }
})();
