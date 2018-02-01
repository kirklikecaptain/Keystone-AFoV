// var keystone = require('keystone');
//
// exports = module.exports = function (req, res) {
//
// 	var view = new keystone.View(req, res);
// 	var locals = res.locals;
//
// 	// locals.section is used to set the currently selected
// 	// item in the header navigation.
// 	locals.section = 'home';
//
// 	// Render the view
// 	view.render('index');
// };

var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// view.query('recent', keystone.list('Session').model
	// 	.find()
	// 	.sort('-publishedDate')
  //   .limit(7));

	// Render the view
	view.render('index');
};
