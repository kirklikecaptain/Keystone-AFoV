var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'sessions';
	locals.filters = {
		session: req.params.session,
	};
	locals.data = {
		session: [],
	};

	view.on('init', function (next) {
		var q = keystone.list('Session').model.findOne({
			slug: locals.filters.session,
		}).populate('artist').populate('contributors');

		q.exec(function (err, result) {
			locals.data.session = result;
			next();
		});

	});

	view.render('session');
};
