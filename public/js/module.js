/* global angular, nav */
angular.module('acm', ['ui.router']).config(
  function ($stateProvider, $urlRouterProvider) {
    'use strict';

    for (var i = 0; i < nav.length; ++i) {
      $stateProvider.state(nav[i].state, {
        templateUrl: nav[i].tmpl,
        controller: nav[i].ctrl,
        url: nav[i].url
      });
    }
    $urlRouterProvider.otherwise('/');
    /* if page not found, send to index */
  }
);