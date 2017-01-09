'user strict';

angular
	.module('app')
 	.controller('AlmundoController', AlmundoController);

AlmundoController.$inject = ['hotelDataService','starsService','resultsService'];

function AlmundoController(hotelDataService,starsService,resultsService) {

	var vm = this;

	vm.$onInit = activate;

	////////////////////
	
	function activate() {

		hotelDataService.getHotels().then(function(){

				starsService.getStars();
				resultsService.changeOrder();
		});

	}


}