'user strict';

angular
	.module('hotelName')
	.service('hotelNameService',hotelNameService);

function hotelNameService() {

	var service = {};

	service.hotelName = null;

	return service;

};