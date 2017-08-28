'use strict';

define([
    'workspace/workspace.module',
    'text!user/user-table/user-table-template.html',
    'css!user/user-table/user-table.css'
], function(workspaceModule, UserTableTemplate) {
    workspaceModule.component('userTable', {
        template: UserTableTemplate,
        controller: function($scope, $element, $attrs, $state) {
            this.gotoUserProfile = function() {
                $state.go('userprofile', { userId: -1 });
            };
        }
    });
});
