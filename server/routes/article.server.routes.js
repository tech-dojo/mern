module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/articles/api/articles/:id')
	.get(articles.read)
  .delete(users.requiresLogin, articles.delete);

	app.route('/articles/edit/api/articles/:id')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);


app.param('id', articles.articleByID);


}
