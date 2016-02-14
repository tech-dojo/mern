var _ = require('lodash'),
	fs = require('fs');


  var resolvingConfig = function() {
 	var conf = {};

 	conf = _.extend(
 		require('./env/all'),
 		require('./env/' + process.env.NODE_ENV) || {}
 	);

 	return _.merge(conf, (fs.existsSync('./config/env/local.js') && require('./env/local.js')) || {});
 };

 /**
  * Load app configurations
  */
 module.exports = resolvingConfig();
