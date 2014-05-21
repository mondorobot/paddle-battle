/**
 * @module main
 */

'use strict';

require.config({
  'waitSeconds': 0,
  'baseUrl': 'javascripts/app',
  'shim': {
    'facebook': {
      'exports': 'FB'
    },
    'modernizr': {
      'exports': 'Modernizr'
    },
    'swig': {
      'exports': 'swig'
    }
  },
  'paths': {
    'jquery': '../../bower_components/jquery/jquery',
    'underscore': '../../bower_components/underscore-amd/underscore',
    'backbone': '../../bower_components/backbone-amd/backbone',
    'swig': '../vendor/swig.min',
    'modernizr': '../../bower_components/modernizr/modernizr',
    'text': '../../bower_components/requirejs-text/text',
    'consolelog': '../vendor/consolelog',
    'facebook': '//connect.facebook.net/en_US/all',
    'google-analytics': '//google-analytics.com/ga',
  }
});

require(['underscore', 'backbone', 'app', 'routers/router', 'consolelog'],
  function(_, Backbone, App, Router) {

    // Bind backbone pub/sub events to App module
    _.extend(App, Backbone.Events);

    // Create a global config model for app settings
    App.config = new Backbone.Model(App.settings);

    // Initialize global router
    App.router = new Router();
    Backbone.history.start();

    // Require remote modules here so they don't block the rest of the app
    require(['google-analytics']);
    require(['helpers/analytics', 'facebook'], function(Analytics) {
      if (typeof FB === 'undefined') {
        return;
      }
      FB.init({
        'appId': App.config.get('fbAccountId'),
        'xfbml': true
      });
      Analytics.socialTrackFacebook();
    });
  }
);
