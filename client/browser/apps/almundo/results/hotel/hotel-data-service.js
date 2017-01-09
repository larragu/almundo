'user strict';

angular
	.module('hotel')
	.service('hotelDataService', hotelDataService);

hotelDataService.$inject = ['Hotel'];

function hotelDataService(Hotel) {

	var service = {};
	service.hotels = [];
	service.filteredHotels = [];
	//Returns a list of hotels
	service.getHotels = getHotels;

	return service;

	////////////////////

	function getHotels() {

		var hotel = Hotel.query();

		return hotel.$promise
			.then(getHotelsComplete)
            .catch(getHotelsFailed);

	}

	function getHotelsComplete(hotels) {

		prepareHotelData(hotels);
	}

	function getHotelsFailed() {

		console.log("Failed to get hotel list");

	}

	//Helper function used in preparing the 
	//hotel data for display
	function prepareHotelData(hotels) {

		service.hotels = [];

		for(var i = 0; i < hotels.length; i++) {

			var hotel = hotels[i];
			service.hotels.push(hotel);
		}

		service.filteredHotels = angular.copy(service.hotels);	

	}

}
