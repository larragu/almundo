'user strict';

angular
	.module('price')
	.service('priceService', priceService);

function priceService() {

	var service = {};

	service.hotelName = null;
    service.price = {min:null,max:null};

    return service;
}