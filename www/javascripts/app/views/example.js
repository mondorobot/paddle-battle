/**
 * @module views/ExampleView
 */

define(['jquery', 'underscore', 'backbone', 'swig', 'app', 'text!templates/example.html'],
  function($, _, Backbone, swig, App, ExampleTemplate) {

    'use strict';

    var ExampleView = Backbone.View.extend({

      'events': {},

      'template': swig.compile(ExampleTemplate),

      'initialize': function() {
        var view = this;

        view.render({
          'url': 'https://github.com/mondorobot/boilerplate-backbone',
          'heading': 'Backbone Boilerplate'
        });

        log('ExampleView : Initialized');
      },

      'render': function(content) {
        var view = this;

        content = content || {};

        view.$el.html(view.template(content));
      }
    });

    return ExampleView;
  }
);
