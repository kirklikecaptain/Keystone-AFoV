
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
		.sort('-publishedDate')
		.limit(1)
		.populate('artist')
	);

	view.query('recent', keystone.list('Session')
		.model
		.find()
		.sort('-publishedDate')
		.skip(1) //skips most recent
		.limit(6)
		.populate('artist')
	);

	// Render the view
	view.render('index');
};
