
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	//grabs last 7

	view.query('recent', keystone.list('Session').model
		.find()
		.sort('-publishedDate')
		.limit(4)
		.populate('artist')
	);

	// Render the view
	view.render('index');
};
