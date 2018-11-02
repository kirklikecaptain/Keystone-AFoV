var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'sessions';

	view.query('sessions', keystone.list('Session')
		.model
		.find()
		.where('status', 'published')
		.populate('artist')
		.sort('-uploadDate')
	);

	view.render('sessions');
};
