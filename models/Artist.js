var keystone = require('keystone');
var Types = keystone.Field.Types;

var Artist = new keystone.List('Artist', {
	map: { name: 'artistName' },
	singular: 'Artist',
	plural: 'Artists',
	autokey: { path: 'slug', from: 'artistName', unique: true },
});

Artist.add({
	artistName: { type: String },
	artistColor: { type: Types.Color },
	artistPicture: { type: Types.CloudinaryImage },
	artistBio: { type: Types.Html, wysiwyg: true, height: 300 },
});

Artist.relationship({ ref: 'Session', refPath: 'artist' });
Artist.defaultColumns = 'artistName|25%, artistColor|15%, artistPicture|15%, artistBio|35%';
Artist.register();
