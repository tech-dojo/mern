var express = require ('express');
var cors = require('cors');
var parser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var config = require('./config/config.js');
var cookieParser = require('cookie-parser');
var mongoStore = require('connect-mongo')({
		session: session
	});

var path = require('path');


module.exports = function (db){
var app = new express();

app.set('port', (process.env.PORT || 3000));
app.use('/static', express.static(path.join(__dirname, '/../.tmp'), { maxAge: 86400000 }));

require('./routes/routeHelper.js')(app);
app.use(cors())
.use(parser.urlencoded({ extended: true}))
.use(parser.json());

// CookieParser should be above session
	app.use(cookieParser());
	// Express MongoDB session storage
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: new mongoStore({
			mongooseConnection: db.connection
			// collection: 'sessions'
		})
	}));

app.use(passport.initialize());
	app.use(passport.session());

require('./routes/users.server.routes.js')(app);
require('./routes/article.server.routes.js')(app);

//require('./routes/order.server.routes.js')(app);
app.use(function(req, res, next) {
    if(req.url.match(/.+\/static/)){
        var url = req.url.match(/\/static.*/);
        res.redirect(url[0]);
    }else
        res.status(404).send('Sorry cant find that!');
});

  return app;
}
