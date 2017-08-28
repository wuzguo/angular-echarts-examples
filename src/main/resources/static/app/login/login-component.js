'use strict';

define([
    'login/login.module',
    'text!login/login-template.html',
    'login/login-service',
    'css!login/login.css'
], function(loginModule, LoginTemplate) {
    loginModule.component('loginForm', {
        template: LoginTemplate,
        controller: function($state, LoginService) {
            var ctrl = this;
            ctrl.user = {
                email: 'admin@gmail.com',
                password: 'admin',
                rememberMe: true
            };
            ctrl.isLoginError = false;
            ctrl.doLogin = function() {
                LoginService.doLogin().then(function (users) {
                    for (var i = 0, length = users.length; i < length; i++) {
                        if(ctrl.user.email === users[i].email && ctrl.user.password === users[i].password){
                            LoginService.isAuth = true;
                            $state.go('workspace');
                            return;
                        }
                    }
                    ctrl.isLoginError = true;
                });
            };
        }
    });
});
