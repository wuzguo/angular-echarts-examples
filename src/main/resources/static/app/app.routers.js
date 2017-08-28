'use strict';
define([], function () {
    //全局路由定义
    return [{
        name: 'app',
        url: '',
        redirectTo: 'login'
    }, {
        name: 'login',
        url: '/login',
        component: 'loginForm',
        authenticate: false,
        resolve: {
            lazyload: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({files: ['login/login-component'], cache: false}).then(function () {
                    $ocLazyLoad.inject('login.module');
                });
            }]
        }
    }, {
        name: 'workspace',
        url: '/workspace',
        component: 'workspace',
        authenticate: true,
        resolve: {
            lazyload: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({files: ['workspace/workspace-component'], cache: false}).then(function () {
                    $ocLazyLoad.inject('workspace.module');
                });
            }]
        }
    }];
});
