var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'artists';
	locals.filters = {
		artist: req.params.artist,
	};
	locals.data = {
		artist: [],
	};

	view.on('init', function (next) {
		var q = keystone.list('Artist').model.findOne({
			slug: locals.filters.artist,
		});

		q.exec(function (err, result) {
			locals.data.artist = result;
			next();
		});


	});



	view.render('artist');
};
