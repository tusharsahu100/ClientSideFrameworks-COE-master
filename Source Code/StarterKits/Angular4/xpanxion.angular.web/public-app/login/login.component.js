"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("angular2-logger/core");
var index_1 = require("../../core-module/index");
var index_2 = require("../shared/index");
var index_3 = require("./index");
var environment_1 = require("../environment");
var LoginComponent = (function () {
    function LoginComponent(_router, _loginService, _logger, _utilityService, _toastrService) {
        this._router = _router;
        this._loginService = _loginService;
        this._logger = _logger;
        this._utilityService = _utilityService;
        this._toastrService = _toastrService;
        this.showLogin = false;
        this._logger.info("LoginComponent : constructor ");
        this.model = new index_3.LoginModel();
        this.model.isAuthInitiated = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._logger.info("LoginComponent : ngOnInit ");
        this.showLogin = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._logger.info("LoginComponent : login ");
        this.model.isAuthInitiated = true;
        if (!this.model.emailAddress) {
            this.model.isAuthInitiated = false;
            this._toastrService.showToastr(index_1.ToastrCode.EmptyEmailAddress, null);
        }
        else if (!this.model.password) {
            this.model.isAuthInitiated = false;
            this._toastrService.showToastr(index_1.ToastrCode.EmptyPassword, null);
        }
        else {
            this.model.isAuthInitiated = true;
            this._loginService.logOn({ UserName: this.model.emailAddress, Password: this.model.password })
                .subscribe(function (successResponse) {
                _this._logger.info("LoginComponent_loginService.logOn : successResponse ");
                var response = successResponse.json();
                response.code = "";
                _this.model.isAuthInitiated = false;
                _this.processLoginRequest(response);
            }, function (errorResponse) {
                _this.resetModel();
                _this._logger.error("LoginComponent_loginService.logOn : errorResponse ");
                _this.model.isAuthInitiated = false;
                throw new index_1.HttpError(index_1.ErrorCode.AuthFailedInvalidAuthResponse, index_1.ErroNotificationType.Dialog, errorResponse);
            });
        }
    };
    LoginComponent.prototype.processLoginRequest = function (response) {
        this._logger.info("LoginComponent : processLoginRequest ");
        if (response) {
            localStorage.setItem(index_2.Constants.localStorageKeys.isLoggedIn, "true");
            localStorage.setItem(index_2.Constants.localStorageKeys.apiToken, JSON.stringify(response.apiToken));
            localStorage.setItem(index_2.Constants.localStorageKeys.sessionId, response.sessionId);
            this._utilityService.redirectToURL(environment_1.Environment.appUrl);
        }
    };
    LoginComponent.prototype.resetModel = function () {
        this._logger.info("LoginComponent : resetModel ");
        this.model.emailAddress = "";
        this.model.password = "";
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-app',
        templateUrl: 'login.component.html',
        providers: [index_3.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_3.LoginService,
        core_2.Logger,
        index_1.UtilityService,
        index_1.ToastrService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map