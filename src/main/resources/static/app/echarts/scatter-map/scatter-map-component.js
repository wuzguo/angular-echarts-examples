'use strict';

define([
    'workspace/workspace.module',
    'text!echarts/scatter-map/scatter-map-template.html',
    'echarts/common/http-common-service',
    'echarts/scatter-map/scatter-map-directive',
    'css!echarts/scatter-map/scatter-map.css'
], function (workspaceModule, mapScatterTemplate) {

    workspaceModule.component('mapScatterComp', {
        template: mapScatterTemplate,
        controller: function ($scope) {

        }
    });

    workspaceModule.controller('mapScatterCtrl',
        ['$scope', '$interval', '$timeout', 'httpCommonService', function ($scope, $interval, $timeout, httpCommonService) {
            var investorsLocation = function () {
                httpCommonService.httpRequest("/echart/statInvestorsLocation", 3000).then(function (res) {
                    console.log("data: " + JSON.stringify(res));
                    if (res.success /*&& res.data*/) {
                        console.log("res.data: " + JSON.stringify(res.data));
                        $scope.dataGroup = res;
                    }
                });
            };

            investorsLocation();
            // 每个分钟请求一次
            $interval(function () {
                investorsLocation();
            }, 60 * 1000);

        }]);
});
