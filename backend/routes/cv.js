var express = require('express');
var router = express.Router();
var path = require('path');
require('dotenv').config();

router.get('/', async (req, res) => {
	const filePath = path.join(__dirname, '..', 'public', 'cv', 'cv.pdf');
	console.log(filePath);
	res.sendFile(filePath);
});

module.exports = router;
