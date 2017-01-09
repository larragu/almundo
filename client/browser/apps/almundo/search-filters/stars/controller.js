'use strict';

angular
	.module('stars')
	.controller('starsCtrl',starsCtrl);

starsCtrl.$inject = ['starsService','filterService'];

function starsCtrl(starsService,filterService) {

	var vm = this;

	vm.starsService = starsService;
	//Updates the check boxes
	vm.updateStars = updateStars;

	////////////////////
	
	function updateStars(starRating) {

		starsService.updateStars(starRating);

		filterService.updateFilter();
	}
}