'user strict';

angular
	.module('hotel')
	.service('Hotel', Hotel);

Hotel.$inject = ['$resource'];

function Hotel($resource) {
	return $resource('/hotels');
}