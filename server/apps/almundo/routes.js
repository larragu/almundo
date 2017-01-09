'use strict';

var express = require('express');
var router = express.Router();
var hotels = require('./controllers/hotels');
var path = require('path');

//Static files
router.use('/', express.static(path.join(__dirname,'/../../../client/browser/apps/almundo')));
router.use('/frameworks', express.static(path.join(__dirname,'/../../../client/browser/frameworks')));
router.use('/libraries', express.static(path.join(__dirname,'/../../../client/browser/libraries')));
router.use('/images', express.static(path.join(__dirname,'/../../../client/browser/apps/almundo/images')));
router.use('/images/hotels', express.static(path.join(__dirname,'images/hotels')));


router.get('/',function(req,res) {
	
	res.sendFile(path.join(__dirname + '/../../../client/browser/apps/almundo/index.htm'));
})


//API
router.get('/import',hotels.import);
router.get('/hotels',hotels.findAll);


module.exports = router;


