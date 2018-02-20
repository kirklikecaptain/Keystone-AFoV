
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.query('hero', keystone.list('Session')
		.model
		.find()
		.sort('-uploadDate')
		.limit(1)
		.populate('artist')
	);

	view.query('recent', keystone.list('Session')
		.model
		.find()
		.sort('-uploadDate')
		.skip(1)
		.limit(9)
		.populate('artist')
	);

	// Render the view
	view.render('index');
};
