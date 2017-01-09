'user strict';

angular
	.module('hotel')
	.component('hotel', {

		templateUrl: 'results/hotel/hotel.htm',
		bindings: {
			hotel: "<"
		},
		controller:'HotelController'
	});