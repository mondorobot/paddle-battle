/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.RequireJS
 * @static
 */

module.exports = function(config) {

	return {

		'global': {
			'options': {
				'name': 'main',
				'baseUrl': config.javascripts + '/app',
				'mainConfigFile': config.javascripts + '/app/main.js',
				// Set value to 'empty:' to exclude from optimizer
				'paths': {
					'facebook': 'empty:',
					'google-analytics': 'empty:',
					'settings': 'empty:'
				},
				'stubModules': ['text'],
				'has': {
					'debugMode': false
				},
				'out': config.jsbin + '/app.min.js'
			}
		}
	};

};