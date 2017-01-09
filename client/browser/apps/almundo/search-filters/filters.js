'use strict';

angular
    .module('searchFilters')
    .filter('starsFilter', function() {
    return function(hotel, selectedStars) {

        if(!selectedStars.all)
        {
            switch(hotel.stars) {

                case 1: {
                    if(selectedStars.one) {
                        return hotel;
                    }
                }
                break;
                case 2: {
                    if(selectedStars.two) {
                        return hotel;
                    }
                }
                break;
                case 3:
                  if(selectedStars.three) {
                      return hotel;
                  }
                  break;
                case 4: {
                    if(selectedStars.four) {
                        return hotel;
                    }
                }
                break;
                case 5: {
                    if(selectedStars.five) {
                        return hotel;
                    }
                }
                break;
            } 
        }
        else {
          return hotel
        }

        return null;
    };
})

//Checks if the user's input matches 
//existing hotels by finding the search 
//term inside of the hotel names.
.filter('nameFilter', function() {
    return function(hotel, searchName) {

        if(searchName) {

            searchName = searchName.toLowerCase();

            var hotelName = (hotel.name).toLowerCase();

            if(hotelName.search(searchName) !== -1) {

                return hotel;
            } else {

                return null;
            }

        } else {

            return hotel;

        }
       
        return hotel;
    };
})

//Adds a period to ARG currency
.filter('periodFilter', function() {
    return function(price) {

        const PERIOD_POSITION = 3;

        price = price.toString();

        if(price.length > PERIOD_POSITION) {
            var position = price.length % PERIOD_POSITION;
            var period = ".";
            price = price.substr(0, position) + period + price.substr(position-1+period.length);
            price = price;          
        }

        return price;

    };

})


//Checks toe see if the hotel's price is between 
//the min and max amount selected by the user
.filter('priceRange',function() {

    return function(hotel,price) {

        var hotelPrice = hotel.price;

        if(price.min >=0 && price.max) {


            if((hotelPrice >= price.min) && (hotelPrice <= price.max)) {

                return hotel;
            } else {
                return null;
            }
        } else {
            return hotel;
        }
    }

})


//Returns a filtered version of the hotel list
.filter('hotelsFilter',['nameFilterFilter','starsFilterFilter','priceRangeFilter',
    function(nameFilterFilter,starsFilterFilter,priceRangeFilter) {

        return function(hotels,options) {

            var name = options.hotelName;
            var selectedStars = options.selectedStars;
            var price = options.price;

            var filteredHotels = [];

            for(var i = 0; i < hotels.length;i++) {

                var hotel = hotels[i];

                hotel = nameFilterFilter(hotel,name);

                if(hotel) {
                    hotel = starsFilterFilter(hotel,selectedStars);
                }

                if(hotel) {
                    hotel = priceRangeFilter(hotel,price);
                }

                if(hotel) {
                    filteredHotels.push(hotel);
                }



            }

            return filteredHotels;
        }

    }
]);
