'use strict';

define([
    'workspace/workspace.module',
    'text!echarts/stacked/stacked-histograms-template.html',
    'echarts/common/http-common-service',
    'echarts/stacked/stacked-histograms-directive',
    'css!echarts/stacked/stacked-histograms.css'
], function (workspaceModule, echartsHistogramsTemplate) {

    workspaceModule.component('stackedHistogramsComp', {
        template: echartsHistogramsTemplate,
        controller: function ($scope) {

        }
    });

    // 控制器
    workspaceModule.controller('stackedHistogramsCtrl',
        ['$scope', '$interval', '$timeout', 'httpCommonService', function ($scope, $interval, $timeout, httpCommonService) {
            // 获取数据的函数
            var registUser = function () {
                // 请求服务端数据
                httpCommonService.httpRequest("/echart/statRegistUser", 3000).then(function (res) {
                    if (res.success /*&& res.data*/) {
                        // 给默认值，避免画图时候报错
                        var exAxisdata = [['0点', 0, 0, 0, 0, 0], ['1点', 0, 0, 0, 0, 0], ['2点', 0, 0, 0, 0, 0],
                            ['3点', 0, 0, 0, 0, 0], ['4点', 0, 0, 0, 0, 0], ['5点', 0, 0, 0, 0, 0],
                            ['6点', 0, 0, 0, 0, 0], ['7点', 0, 0, 0, 0, 0], ['8点', 0, 0, 0, 0, 0],
                            ['9点', 0, 0, 0, 0, 0], ['10点', 0, 0, 0, 0, 0], ['11点', 0, 0, 0, 0, 0],
                            ['12点', 0, 0, 0, 0, 0], ['13点', 0, 0, 0, 0, 0], ['14点', 0, 0, 0, 0, 0],
                            ['15点', 0, 0, 0, 0, 0], ['16点', 0, 0, 0, 0, 0], ['17点', 0, 0, 0, 0, 0],
                            ['18点', 0, 0, 0, 0, 0], ['19点', 0, 0, 0, 0, 0], ['20点', 0, 0, 0, 0, 0],
                            ['21点', 0, 0, 0, 0, 0], ['22点', 0, 0, 0, 0, 0], ['23点', 0, 0, 0, 0, 0]];
                        // 字典，这里要跟图表中的各个设备的展示顺序一致，否则数据将不正确
                        var indexDev = {'PC': 1, '触屏': 2, 'IOS': 3, '微信': 4, '安卓': 5};
                        var retJson = res.data;
                        // console.log("retJson: " + JSON.stringify(retJson));
                        for (var key in retJson) {
                            // 将对象转换为数组
                            var indexData = retJson[key];
                            for (var k in indexData) {
                                for (var i = 0; i < 24; i++) {
                                    if ((k + "点") == exAxisdata[i][0]) {
                                        // 由于数据量太小，这里加上随机数
                                        exAxisdata[k][indexDev[key]] = indexData[k] + parseInt(Math.random() * 1000);
                                    }
                                }
                            }
                        }

                        // console.log(JSON.stringify("exAxisdata: " + exAxisdata));
                        // 更新数据会触发指令的监听事件
                        $scope.dataGroup = exAxisdata;
                    }
                });
            };

            registUser();
            // 每个十秒请求一次
            $interval(function () {
                registUser();
            }, 10 * 1000);
        }]);
})
