'use strict';
define([], function () {
    //工作空间路由定义
    return [{
        parent: 'workspace',
        name: 'user',
        url: '/user',
        component: 'userTable',
        authenticate: true,
        resolve: {
            lazyload: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: ['user/user-table/user-table-component'],
                    cache: false
                }).then(function () {
                    $ocLazyLoad.inject('workspace.module');
                });
            }]
        }
    }, {
        parent: 'workspace',
        name: 'stackedHistograms',
        url: '/echarts/stacked',
        component: 'stackedHistogramsComp',
        authenticate: true,
        resolve: {
            lazyload: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: ['echarts/stacked/stacked-histograms-component'],
                    cache: false
                }).then(function () {
                    $ocLazyLoad.inject('workspace.module');
                });
            }]
        }
    }, {
        parent: 'workspace',
        name: 'scatter-map',
        url: '/echarts/scatter-map',
        component: 'mapScatterComp',
        authenticate: true,
        resolve: {
            lazyload: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: ['echarts/scatter-map/scatter-map-component'],
                    cache: false
                }).then(function () {
                    $ocLazyLoad.inject('workspace.module');
                });
            }]
        }
    }];
});
