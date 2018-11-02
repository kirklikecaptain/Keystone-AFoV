var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var sitemap = require('keystone-express-sitemap');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {


	//generate dynamic sitemap
	app.get('/sitemap.xml', function(req, res) {
		sitemap.create(keystone, req, res);
	});

	// Views
	app.get('/', routes.views.index);
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
	app.get('/artists', routes.views.artists);
	app.get('/artists/:artist', routes.views.artist);
	app.get('/sessions', routes.views.sessions);
	app.get('/sessions/:session', routes.views.session);
	app.get('/about', routes.views.about);
	app.get('/style', routes.views.style);
	app.all('/contact', routes.views.contact);
	app.get('/.well-known/acme-challenge/:content', function(req, res) {
		res.send('Nqb49asgeJpOS1x39iqtiyiNISMwu9vB89n2FzDuZoA')
	})
};
