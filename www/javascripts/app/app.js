/**
 * @module app
 */

define(['jquery'], function($) {
  'use strict';

  // Bootstrap app settings defined in the DOM.
  var json = $('#app-settings').text(),
    settings = (json) ? $.parseJSON($('#app-settings').text()) : {};

  return settings;
});
