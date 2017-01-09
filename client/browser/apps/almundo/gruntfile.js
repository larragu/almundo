module.exports = function(grunt) {


var srcFiles = [
	'../../frameworks/angular1.6.0.js',
	'../../libraries/vendor/*.js',
	'app.js',
	'component.js',
	'controller.js',
	'results/results.js',
	'results/controller.js',
	'results/service.js',
	'results/component.js',
	'results/hotel/hotel.js',
	'results/hotel/controller.js',
	'results/hotel/resource.js',
	'results/hotel/component.js',
	'results/hotel/hotel-data-service.js',
	'search-filters/search-filters.js',
	'search-filters/component.js',
	'search-filters/controller.js',
	'search-filters/filters.js',
	'search-filters/service.js',
	'search-filters/hotel-name/hotel-name.js',
	'search-filters/hotel-name/component.js',
	'search-filters/hotel-name/controller.js',
	'search-filters/hotel-name/service.js',
	'search-filters/price/price.js',
	'search-filters/price/component.js',
	'search-filters/price/controller.js',
	'search-filters/price/service.js',
	'search-filters/stars/stars.js',
	'search-filters/stars/component.js',
	'search-filters/stars/controller.js',
	'search-filters/stars/service.js'
	]

	//Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		    options: {
		    	separator: ';',
			},
			build: {
				src: [srcFiles],
				dest: 'dist/js/script.min.js'
			}
		},
		uglify: {
			production: {
				src: [srcFiles],
				dest: 'dist/js/script.min.js'
			}
		},
		cssmin: {
            production: {
            	src: [
					'stylesheet.css',
					'results/stylesheet.css',
					'results/hotel/stylesheet.css',
					'search-filters/stylesheet.css',
				    '../../libraries/vendor/rzslider.css'
				],
				dest: 'dist/css/stylesheet.css'
			}
        }
	});


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['concat:build','cssmin:production']);
	grunt.registerTask('production',['uglify:production','cssmin:production']);

};