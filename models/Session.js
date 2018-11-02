var keystone = require('keystone');
var Types = keystone.Field.Types;

var Session = new keystone.List('Session', {
	map: { name: 'songTitle' },
	singular: 'Session',
	plural: 'Sessions',
	autokey: { path: 'slug', from: 'songTitle', unique: true },
	defaultSort: '-uploadDate',
});

Session.add({
	songTitle: { type: String },
	artist: { type: Types.Relationship, ref: 'Artist' },
	thumbnail: { type: Types.CloudinaryImage },
	youtubeVideoID: { type: String },
	uploadDate: { type: Types.Date, default: Date.now },
	shortDescription: { type: Types.Textarea, height: 60 },
	contributors: { type: Types.Relationship, ref: 'Contributor', many: true },
	status: { type: Types.Select, options: 'draft, published', default: 'draft'},
});

Session.defaultColumns = 'songTitle, artist, thumbnail, youtubeVideoID, uploadDate, status';
Session.register();
