'use strict';

define([
    'workspace/workspace.module'
], function (workspaceModule) {
    // 这里不要注入 $scope，否则会报错: [$injector:unpr] Unknown provider: $scopeProvider <- $scope <- httpCommonService
    workspaceModule.service('httpCommonService', ['$http', function ($http) {
        var doRequest = function (url, timeout) {
            var req = {
                method: 'GET',
                url: url,
                cache: false,
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            return $http(req).then(function (response) {
                //  console.log("success: " + JSON.stringify(response));
                return response.data;
            }, function (response) {
                console.log("error: " + JSON.stringify(response));
                return response.data;
            });
        }
        return {
            httpRequest: function (url, timeout) {
                return doRequest(url, timeout);
            }
        };
    }]);
});
