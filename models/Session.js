var keystone = require('keystone');
var Types = keystone.Field.Types;

var Session = new keystone.List('Session', {
	map: { name: 'songTitle' },
	singular: 'Session',
	plural: 'Sessions',
	autokey: { path: 'slug', from: 'songTitle', unique: true },
});

Session.add({
	songTitle: { type: String },
	artist: { type: Types.Relationship, ref: 'Artist' },
	thumbnail: { type: Types.CloudinaryImage },
	youtubeVideoID: { type: String },
	publishedDate: { type: Types.Date },
	shortDescription: { type: Types.Textarea, height: 60 },
	contributors: { type: Types.Relationship, ref: 'Contributor', many: true },
});

Session.register();
