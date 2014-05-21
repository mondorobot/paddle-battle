/**
 * @module routers/Router
 */

define(['jquery', 'underscore', 'backbone', 'app', 'views/example'],
  function($, _, Backbone, App, ExampleView) {

    'use strict';

    var Router = Backbone.Router.extend({

      'routes': {
        '': 'index'
      },

      'initialize': function() {
        log('Router : Initialized');
      },

      'index': function() {
        new ExampleView({
          'el': '#content'
        });
      }
    });

    return Router;
  }
);
