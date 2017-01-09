'use strict';

angular
    .module('price')
    .controller('PriceController',PriceController);

PriceController.$inject = ['priceService','filterService','$filter'];

function PriceController(priceService,filterService,$filter) {

	var vm = this;

	vm.priceService = priceService;
    vm.slider = {
        minValue: 0,
        maxValue: 3000,
        floor: 0,
        ceil: 3000,
        step: 1,
        options: {
            translate: function(value) {

                var newValue;

                if(value !== undefined) {
                    newValue = '$' + $filter('periodFilter')(value);
                }

              return newValue;
            },
            getSelectionBarColor: function(value) {
                return 'darkgray';
            },
            getPointerColor: function(value) {
                return 'white';
            },
            getTickColor: function(value) {
                return 'white';
            },
            onChange: function(id,minValue,maxValue) {

                priceService.price.min = minValue;
                priceService.price.max = maxValue;
                filterService.updateFilter();
            }
        }
    };

}