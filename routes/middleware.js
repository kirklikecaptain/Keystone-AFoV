var _ = require('lodash');


/**
	Initialises the standard view locals
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Artists', key: 'artists', href: '/artists', icon: 'person' },
		{ label: 'Sessions', key: 'sessions', href: '/sessions', icon: 'queue_music' },
		{ label: 'Blog', key: 'blog', href: '/blog', icon: 'description' },
		{ label: 'Contact', key: 'contact', href: '/contact', icon: 'email' },
		{ label: 'About', key: 'about', href: '/about', icon: 'favorite' },
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
