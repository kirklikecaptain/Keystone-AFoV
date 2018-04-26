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
		related: [],
	};


	view.on('init', async function (next) {

		var q = keystone.list('Session')
			.model
			.findOne({
				slug: locals.filters.session
			})
			.populate('artist')
			.populate('contributors');

		try {
			var result = await q.exec();
			var relate = await keystone.list('Session')
				.model
				.find({
					artist: result.artist
				})
				.where('songTitle').ne(result.songTitle)
				.populate('artist')
				.exec();

			locals.data.session = result;
			locals.data.related = relate;
			next();

		} catch (err) {
			console.error(err);
		}

	});



	view.render('session');
};
