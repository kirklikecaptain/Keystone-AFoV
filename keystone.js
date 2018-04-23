// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

var keystone = require('keystone');
var handlebars = require('express-handlebars');

keystone.init({
	'name': 'AFoV',
	'brand': 'A Fistful of Vinyl',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

});
keystone.import('models');
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});
keystone.set('routes', require('./routes'));

keystone.set('nav', {
	artists: 'artists',
	sessions: 'sessions',
	posts: ['posts', 'post-categories'],
	enquiries: 'enquiries',
	contributors: 'contributors',
	users: 'users',
});

keystone.start();
