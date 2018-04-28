var keystone = require('keystone');
var Types = keystone.Field.Types;

var About = new keystone.List('About', {
	map: { name: 'header' },
	singular: 'About',
	plural: 'About Sections',
});

About.add({
	header: { type: String },
	text: { type: Types.Html, wysiwyg: true },
	image: { type: Types.CloudinaryImage },
	order: { type: Types.Number },
});

About.defaultColumns = 'header, order, image, text';
About.register();
