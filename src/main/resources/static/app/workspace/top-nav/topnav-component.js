'use strict';

define([
    'workspace/workspace.module',
    'text!workspace/top-nav/topnav-template.html'
], function(workspaceModule, TopNavTemplate) {
    workspaceModule.component('topNav', {
        template: TopNavTemplate,
        controller: function() {}
    });
});
