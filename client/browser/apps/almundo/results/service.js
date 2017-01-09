'user strict';

angular
	.module('results')
	.service('resultsService', resultsService);

	resultsService.$inject = ['Hotel','hotelDataService','filterService',
							  'starsService','$filter'];

function resultsService(Hotel,hotelDataService,filterService,starsService,$filter) {

	var service = {};

	service.displayOrder = [{id:0,name:'Precio más bajo'},{id:1,name:'Precio más alto'},{id:2,name:'Menos estrellas'},{id:3,name:'Más estrellas'}];
	service.selectedOrder = service.displayOrder[0];
	//Changes the order of the hotel results
	service.changeOrder = changeOrder;

	return service;

	////////////////////

	//Private helper function
	function sort(property,first,second) {

		hotelDataService.hotels.sort(function(a,b) {

			if (a[property] < b[property]) {

			  	return first;
			} else if (a[property] > b[property]) {

				return second;
			}
				return 0;
		});

		hotelDataService.filteredHotels.sort(function(a,b) {

			if (a[property] < b[property]) {

			  	return first;
			} else if (a[property] > b[property]) {

				return second;
			}
				return 0;
		});

	}

	function changeOrder() {


		var property = null;

		switch(service.selectedOrder.id) {
			case 0: {
				property = 'price'

				//ascending
				sort(property,-1,1);

			}
			break;
			case 1: {
				property = 'price';

				//descending
				sort(property,1,-1);
			}
			break;
			case 2: {
				property = 'stars'

				//ascending
				sort(property,-1,1);

			}
			break;
			case 3: {
				property = 'stars';

				//descending
				sort(property,1,-1);
			}
			break;
		}
	}

}
