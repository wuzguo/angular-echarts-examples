'use strict';

define([
    'app.routers',
    'workspace/workspace.routers',
    'login/login.module',
    'login/login-service'
], function (appRouters, workspaceRouters, canvasRouters) {
    //配置路由规则
    function configRouter(ngModule, routersConfig) {
        ngModule.config(['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', function ($stateProvider, $locationProvider, $ocLazyLoadProvider) {
            $locationProvider.hashPrefix('');//去除浏览器url地址中的!
            $ocLazyLoadProvider.config({
                'debug': true, // For debugging 'true/false'
                'events': true // For Event 'true/false'
            });
            for (var i = 0; i < routersConfig.length; i++) {
                $stateProvider.state(routersConfig[i]);
               // console.log(JSON.stringify(routersConfig[i]));
            }
        }]);
    }

    //根模块
    var rootModule = angular.module('MonitorRootModule', ['ui.router', 'oc.lazyLoad', 'login.module']);
    configRouter(rootModule, appRouters);
    configRouter(rootModule, workspaceRouters);
    rootModule.run(['$transitions', '$ocLazyLoad', function ($transitions, $ocLazyLoad) {
        $transitions.onStart({}, function (trans) {
            var auth = trans.injector().get('LoginService');
            if (trans.$to().authenticate && !auth.isAuth) {
                return trans.router.stateService.target('login');
            }
        });
    }]);
    return rootModule;
});
