//this one needs work

var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'artists';
	locals.filters = {
		session: req.params.session,
	};
	locals.data = {
		artists: [],
	};

	view.on('init', function (next) {
		var q = keystone.list('Session').model.findOne({
			slug: locals.filters.session,
		});

		q.exec(function (err, result) {
			locals.data.session = result;
			next();
		});

	});

  // view.query('related', keystone.list('Video').model
	// 	.find()
	// 	.where('bandName').equals()
  // );

	view.render('session');
};
