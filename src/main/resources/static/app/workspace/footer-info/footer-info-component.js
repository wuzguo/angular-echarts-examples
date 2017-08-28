'use strict';

define([
    'workspace/workspace.module',
    'text!workspace/footer-info/footer-info-template.html'
], function(workspaceModule, FooterInfoTemplate) {
    workspaceModule.component('footerInfo', {
        template: FooterInfoTemplate,
        controller: function() {}
    });
});
