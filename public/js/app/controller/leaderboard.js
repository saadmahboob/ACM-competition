/* global angular, _ */
angular.module('acm').controller('leaderboardCtrl',
  function ($scope, $stateParams, $modal, $http, alerts, results, user) {
    'use strict';

    var id = $stateParams.id;

    $scope.title = 'Leaderboard';

    $scope.tabs = [
      {
        heading: 'Overall',
        tables: []
      },
      {
        heading: 'By Question',
        tables: []
      }
    ];

    results.getScores(id, function (err, results) {
      if (err) return alerts.create('danger', err);

      $scope.tabs[0].tables.push({
        data: results.overall,
        labels: [
          { lbl: 'Points', key: 'points' },
          { lbl: '# Solved', key: 'solved' }
        ]
      });

      _.each(results.group, function (question) {
        $scope.tabs[1].tables.push({
          heading: question.title,
          data: question.results
        });
      });
    });

    $scope.show = function (result, heading) {
      if (heading === 'Overall') return;
      if (!user.data) return;
      if (!user.data.isAdmin) return;

      result.success = true;
      result.eventLabel = $scope.event.name;
      $modal.open({
        templateUrl: 'tmpl/m/result-info.html',
        controller: 'mResultInfo',
        resolve: {
          result: function () {
            return result;
          }
        }
      });
    };
  }
);
