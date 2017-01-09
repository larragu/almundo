'use strict';

angular
	.module('hotel')
	.controller('HotelController', HotelController);

function HotelController() {

	var vm = this;

	//Creates an array out of the number 
	//of stars the hotel has
	vm.createArray = createArray;

	////////////////////

	function createArray(number) {
    	return new Array(number);   
	}

}