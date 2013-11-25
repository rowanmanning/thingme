module.exports = function (grunt) {

	grunt.initConfig({

		jshint: {
			all: ['**/*.js', '!node_modules/**/*.js'],
			options: {
				es3: false,
				indent: 4,
				latedef: false,
				maxcomplexity: 4,
				maxdepth: 2,
				maxlen: 100,
				maxparams: 2,
				maxstatements: 6,
				node: true,
				quotmark: 'single'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('default', ['lint']);
	grunt.registerTask('ci', ['lint']);

};