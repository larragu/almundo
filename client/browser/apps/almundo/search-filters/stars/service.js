'user strict';

angular
    .module('stars')
    .service('starsService',starsService);

starsService.$inject = ['hotelDataService'];

function starsService(hotelDataService) {

	var service = {};

    const ALL_STARS = 0;
    service.totalStars = {total:0,one:0,two:0,three:0,four:0,five:0};
    service.selectedStars = {all:true,one:false,two:false,three:false,four:false,five:false};
    service.updateStars = updateStars;
    service.getStars = getStars;

    return service;

    ////////////////////
    
    function updateStars(starRating) {
        if(starRating === ALL_STARS) {
            service.selectedStars = [];
            service.selectedStars.all = true;
        }
        else if (service.selectedStars.all) {
            delete service.selectedStars.all;
        }

    }

	function getStars() {

		service.totalStars.total = hotelDataService.hotels.length;

		for(var i = 0; i < hotelDataService.hotels.length; i++) {

			var stars = hotelDataService.hotels[i].stars;
			switch(stars) {

                case 1: {
                    service.totalStars.one += 1;
                }
                break;
                case 2: {
                    service.totalStars.two += 1;
                }
                break;
                case 3:{
                  	service.totalStars.three += 1;
                }
                  break;
                case 4: {
                    service.totalStars.four += 1;
                }
                break;
                case 5: {
                    service.totalStars.five += 1;
                }
                break;
            } 
        }

	}
};