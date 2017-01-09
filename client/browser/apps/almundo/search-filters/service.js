'user strict';

angular.module('searchFilters')

.service('filterService',filterService);

filterService.$inject = ['hotelNameService','priceService','starsService','hotelDataService','$filter'];

function filterService(hotelNameService,priceService,starsService,hotelDataService,$filter) {

	var service = {};

    service.updateFilter = updateFilter;

    return service;
    
    ////////////////////
    
    function updateFilter() {

        var filterOptions = {};
        filterOptions.hotelName = hotelNameService.hotelName;
        filterOptions.selectedStars = starsService.selectedStars;
        filterOptions.price = priceService.price;

        hotelDataService.filteredHotels = $filter('hotelsFilter')(hotelDataService.hotels,filterOptions);
    }

}
