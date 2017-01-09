'use strict';

var Hotel = require('./../models/hotel');

var mongoose = require('mongoose');

module.exports.findAll = function(req,res) {

	//Find the user's term in the database.
	Hotel.find({},{'_id':0,'name':1, 'stars':1, 'price':1, 'image':1})
	.then(function(hotels) {
		
		return res.status(200).send(hotels);

	})
	.catch(function(err) {

		if(err) {
			console.log("Hotel.query failed: ",err);
			return res.status(500).send(err);
		} 


	});

}

//Populate the database
module.exports.import = function(req,res) {

	Hotel.create(
	{
		"_id" : new mongoose.mongo.ObjectID(),
		"name" : "Hotel Emperador",
		"stars" : "3",
		"price" : "1596",
		"image" : '/images/hotels/emperador.png'
	},
	{
		"_id" : new mongoose.mongo.ObjectID(),
		"name" : "Petit Palace San Bernardo",
		"stars" : "4",
		"price" : "2145",
		"image" : '/images/hotels/petit_palace.png'
	},
	{
		"_id" : new mongoose.mongo.ObjectID(),
		"name" : "Hotel Nuevo Boston",
		"stars" : "2",
		"price" : "861",
		"image" : '/images/hotels/nuevo_boston.png'
	})
	.then(function() {
	
		return res.status(200).send('Import Complete!');

	})
	.catch(function(err) {

		if(err) {
			console.log("Error importing data: ",err);
			return res.status(500).send(err);
		} 


	});
}
