var keystone = require('keystone');
var { google } = require('googleapis');

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
		stats: [],
	};

	view.on('init', async function (next) {

		var q = keystone.list('Session')
			.model
			.findOne({
				slug: locals.filters.session,
			})
			.populate('artist')
			.populate('contributors');

		try {
			var result = await q.exec();
			var relate = await keystone.list('Session')
				.model
				.find({ artist: result.artist })
				.where('songTitle')
				.ne(result.songTitle)
				.populate('artist')
				.exec();

			var ytquery = google.youtube({ version: 'v3', auth: process.env.YOUTUBE_KEY });

			ytquery.videos.list({ id: result.youtubeVideoID, part: 'statistics' }, (err, res) => {
				if (err) {
					console.log(err);
					next(err);
				} else {
					locals.data.stats = res.data.items[0].statistics;
					locals.data.session = result;
					locals.data.related = relate;
					next();
				}
			});
		} catch (err) {
			console.error(err);
		}
	});

	view.render('session');
};
