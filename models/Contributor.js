var keystone = require('keystone');
var Types = keystone.Field.Types;

var Contributor = new keystone.List('Contributor', {
	map: { name: 'name' },
	singular: 'Contributor',
	plural: 'Contributors',
});

Contributor.add({
	name: { type: String },
	roles: { type: String },
	mugshot: { type: Types.CloudinaryImage },
	instagramHandle: { type: String },
	instagramURL: { type: String },
	twitterHandle: { type: String },
	twitterURL: { type: String },
	emailAddress: { type: String },
});

Contributor.relationship({ ref: 'Session', refPath: 'contributors' });

Contributor.register();
