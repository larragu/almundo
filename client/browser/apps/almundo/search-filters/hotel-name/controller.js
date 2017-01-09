'use strict';

angular.module('hotelName')
  .controller('HotelNameController', HotelNameController);

HotelNameController.$inject = ['hotelNameService','filterService'];

function HotelNameController(hotelNameService,filterService) {

	var vm = this;

	vm.hotelNameService = hotelNameService;
	vm.updateHotelName = updateHotelName;

	////////////////////
	
	function updateHotelName() {
		filterService.updateFilter();
	}

}