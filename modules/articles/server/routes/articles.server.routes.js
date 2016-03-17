'use strict';

/**
 * Module dependencies
 */
var articlesPolicy = require('../policies/articles.server.policy'),
  articles = require('../controllers/articles.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/articles').all(articlesPolicy.isAllowed)
    .get(articles.list)
    .post(articles.create)
    .delete(articles.deleteAll);

  // Single article routes
  app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
    .get(articles.read)
    .put(articles.update)
    .delete(articles.delete);

  app.route('/api/articles/:articleId/clone').all(articlesPolicy.isAllowed)
      .get(articles.read)
      .post(articles.clone);
  // Finish by binding the article middleware
  app.param('articleId', articles.articleByID);
};

