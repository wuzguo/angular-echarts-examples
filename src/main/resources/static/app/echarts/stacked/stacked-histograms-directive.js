'use strict';

define([
    'workspace/workspace.module'
], function (workspaceModule) {

    // 定义指令
    workspaceModule.directive('stackedEchart', function () {
        //初始化echarts图表
        var echeartOption = function (me) {
            var axisData = [['0点', 0, 0, 0, 0, 0], ['1点', 0, 0, 0, 0, 0], ['2点', 0, 0, 0, 0, 0],
                ['3点', 0, 0, 0, 0, 0], ['4点', 0, 0, 0, 0, 0], ['5点', 0, 0, 0, 0, 0],
                ['6点', 0, 0, 0, 0, 0], ['7点', 0, 0, 0, 0, 0], ['8点', 0, 0, 0, 0, 0],
                ['9点', 0, 0, 0, 0, 0], ['10点', 0, 0, 0, 0, 0], ['11点', 0, 0, 0, 0, 0],
                ['12点', 0, 0, 0, 0, 0], ['13点', 0, 0, 0, 0, 0], ['14点', 0, 0, 0, 0, 0],
                ['15点', 0, 0, 0, 0, 0], ['16点', 0, 0, 0, 0, 0], ['17点', 0, 0, 0, 0, 0],
                ['18点', 0, 0, 0, 0, 0], ['19点', 0, 0, 0, 0, 0], ['20点', 0, 0, 0, 0, 0],
                ['21点', 0, 0, 0, 0, 0], ['22点', 0, 0, 0, 0, 0], ['23点', 0, 0, 0, 0, 0]];

            var stackedOption = {
                /*标题*/
                title: {
                    text: me.etext || '注册用户量数据统计',
                    subtext: me.esubtext || '实时数据',
                    x: 'left'
                },

                /*提示框，鼠标悬浮交互时的信息提示*/
                color: ['#3398DB'],
                tooltip: {
                    trigger: me.etrigger || 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: me.elegendata || ['注册量（人）']
                },
                /*工具箱，每个图表最多仅有一个工具箱*/
                toolbox: {
                    show: true,
                    feature: me.efeature || {
                        mark: {
                            show: false
                        },
                        dataView: {
                            show: false,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        },
                        restore: {
                            show: false
                        }
                    }
                },
                // 坐标网格设置
                grid: {
                    left: '1%',
                    right: '3%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: me.exAxis || [
                    {
                        data: (me.exAxisData || axisData).map(function (item) {
                            return item[0];
                        }),

                        type: me.exAxisType || 'category'
                    }
                ],
                /*直角坐标系中纵轴数组*/
                yAxis: me.eyAxis || [
                    {
                        type: 'value',
                        min: 0,
                        minInterval: 1
                    }
                ],

                /*驱动图表生成的数据内容数组*/
                series: me.eseries || [
                    {
                        name: 'PC',
                        type: 'bar',
                        stack: '注册',
                        barWidth: 40,
                        data: (me.exAxisData || axisData ).map(function (item) {
                            return item[1];
                        })
                    },
                    {
                        name: '触屏',
                        type: 'bar',
                        stack: '注册',
                        data: (me.exAxisData || axisData ).map(function (item) {
                            return item[2];
                        })
                    },
                    {
                        name: 'IOS',
                        type: 'bar',
                        stack: '注册',
                        data: (me.exAxisData || axisData ).map(function (item) {
                            return item[3];
                        })
                    },
                    {
                        name: '微信',
                        type: 'bar',
                        stack: '注册',
                        data: (me.exAxisData || axisData ).map(function (item) {
                            return item[4];
                        })
                    },

                    {
                        name: '安卓',
                        type: 'bar',
                        stack: '注册',
                        data: (me.exAxisData || axisData ).map(function (item) {
                            return item[5];
                        }),
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
            };

            // 重置图表
            me.echarts.clear();
            me.echarts.setOption(stackedOption);
        };

        return {
            restrict: 'AE',

            replace: false,

            // 定义指令和模板中使用的作用域的关系：
            // false: 复用组件具体使用位置所在的作用域
            // true: 创建子作用域，该作用域继承组件具体使用位置所在的作用域
            // 对象：创建独立作用域，该作用域没有继承原型：插入（@）、数据绑定（=）、表达式（&），在指令定义中会以名-值对的方式来定义这些接口：
            // scope: {
            //     isolated1: '@attribute1',
            //     isolated2: '=attribute2',
            //     isolated3: '&attribute3',
            // }
            // 如果在定义字段值时省略了属性名称，那么就表示该映射属性与对应的独立作用域字段名称完全一致
            scope: {
                source: '='
            },
            template: '<div>柱状图</div>',

            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
                // 指令间数据共享的时候用到
            }],
            // 其他指令需要调用这个指令的时候需要用到 controller 的名称
            controllerAs: 'stackedEchartController',

            compile: function ($scope, element, attr) {
                // 获取图表的渲染位置
                var stacked = document.getElementById('echarts-stacked');
                // 初始化
                var me = me || {};
                // 初始化图表
                me.echarts = echarts.init(stacked);

                // 直接返回 link 函数
                return function ($scope, element, attr) {
                    $scope.$watch(
                        function ($scope) {
                            return $scope.source;
                        },
                        function () {
                            var data = $scope.source;
                            if (data && angular.isArray(data)) {
                                var self = me;
                                self.exAxisData = data;
                                echeartOption(self);
                            }
                        }, true);

                    $scope.resizeDom = function () {
                        return {
                            'height': stacked.offsetHeight,
                            'width': stacked.offsetWidth
                        };
                    };
                    $scope.$watch($scope.resizeDom, function () {
                        me.echarts.resize();
                    }, true);

                    // 渲染图表
                    echeartOption(me);
                }
            }
        };
    });
});
