'use strict';

define([
    'login/login.module'
], function (loginModule) {
    loginModule.service('LoginService', ['$http', function ($http) {
        var service = {
            isAuth: false,
            doLogin: function () {
                return $http.get('data/user.json', {cache: true}).then(function (resp) {
                    return resp.data.users;
                });
            }
        };
        return service;
    }]);
});
