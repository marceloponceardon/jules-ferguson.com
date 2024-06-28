var express = require('express');
var router = express.Router();

// Serve the index page to wake up the app
// Since it is hosted on the free tier of 
// Render, the app goes to sleep after 30 minutes
// of inactivity. This endpoint is used to wake
// the app up.

router.get('/', function(req, res, next) {
	res.status(200);
	res.send('App is running!');
});

router.head('/', function(req, res, next) {
	res.status(200);
	res.send('App is running!');
});

module.exports = router;
