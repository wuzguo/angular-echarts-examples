'use strict';

define([
    'workspace/workspace.module',
    'text!workspace/left-nav/leftnav-template.html'
], function (workspaceModule, LeftNavTemplate) {
    workspaceModule.component('leftNav', {
        template: LeftNavTemplate,
        controller: function () {
            require(['../../../scripts/leftnav']);
        }
    });
});
