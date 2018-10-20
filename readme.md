# A Fistful of Website

The first legit site for A Fistful of Vinyl.

- Uses node 8.10.0

## Code Stuff
Keystone.js : a mostly-headless MVC framework
[Keystone Documentation](http://keystonejs.com/docs/)

- Handlebars (.hbs) for view templates
- Sass (.scss) for styling
- Express app
- MongoDB
- Cloudinary CDN for images
- Youtube API for video stats 

## Development Stuff
### Nodemon for local server
- Run ```nodemon keystone.js``` or just ```nodemon```to start local server on localhost:3000.

### Gulp for live reloading after scss changes
- Open a concurrent terminal window and run ```gulp``` to start watching for changes to scss and hbs files. You'll also need to run the 'live-reload' extension in Chrome to auto update.

### Live-Reload watcher
- Install and activate the [Live Reload Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

### ENV variables
- Buried in a secret location far far away.
