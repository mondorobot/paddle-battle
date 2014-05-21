/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.PrettySass
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'options': {
				'alphabetize': true,
				'indent': 't'
			},
			'src': [config.stylesheets + '/scss/**/*.scss'],
		}

	};

}