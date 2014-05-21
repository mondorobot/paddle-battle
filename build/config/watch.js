/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Watch
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'files': [
				config.stylesheets + '/scss/**/*.scss'
			],
			'tasks': ['compass:watch']
		}

	};

}

