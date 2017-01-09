'use strict';

angular.module('searchFilters')
  .controller('SearchFiltersController',SearchFiltersController);

SearchFiltersController.$inject = ['resultsService','filterService'];

function SearchFiltersController(resultsService,filterService) {

	var vm = this;

	vm.filterService = filterService;
	//Updates the search filter
	vm.updateFilter = updateFilter;

	////////////////////
	
	function updateFilter() {

		filterService.updateFilter();

		resultsService.changeOrder();
	}

}
