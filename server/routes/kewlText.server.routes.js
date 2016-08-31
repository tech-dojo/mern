module.exports = function(app){

 var kewlTexts = require('./../controllers/kewlTexts.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

  app.route('/api/kewlTexts')
	.get(kewlTexts.list)
	.post(users.requiresLogin, kewlTexts.create);
  
  app.route('/api/kewlTexts/renderText')
	.get(kewlTexts.list)
	.post(users.requiresLogin, kewlTexts.getKewlText);

  app.route('/kewlTexts/api/kewlTexts/:kewlTextid')
	.get(kewlTexts.read)
  .delete(users.requiresLogin, kewlTexts.delete);

	app.route('/kewlTexts/edit/api/kewlTexts/:kewlTextid')
	.get(kewlTexts.read)
	.put(users.requiresLogin, kewlTexts.update);


app.param('kewlTextid', kewlTexts.kewlTextByID);


}
