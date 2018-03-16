var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var artist = req.params.artist;

	locals.section = 'artists';
	locals.filters = {
		artist: req.params.artist,
	};

	locals.data = {
		artist: [],
		sessions: [],
	};

	view.on('init', async function (next) {

		var q = keystone.list('Artist').model.findOne({ slug: locals.filters.artist });

    try {
			var result = await q.exec();
			var session = await keystone.list('Session').model.find({ artist: result._id}).exec();
			locals.data.artist = result;
			locals.data.sessions = session;
			next();
		} catch (err) {
			console.error(err);
		}

	});

	view.render('artist');
};
