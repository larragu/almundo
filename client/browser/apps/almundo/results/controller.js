'use strict';

angular
	.module('results')
	.controller('ResultsController',ResultsController);

ResultsController.$inject = ['resultsService','hotelDataService','filterService'];

function ResultsController(resultsService,hotelDataService,filterService) {

	var vm = this;
	vm.hotelsService = hotelDataService;
	vm.resultsService = resultsService;
}