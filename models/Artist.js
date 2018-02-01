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

//revisit this
Artist.relationship({ ref: 'Session', refPath: 'artist' });


// Artist.defaultSort = '-artistName'; this may break things
Artist.register();
