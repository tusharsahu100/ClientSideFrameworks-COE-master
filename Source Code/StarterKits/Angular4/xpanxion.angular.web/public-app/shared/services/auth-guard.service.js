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
var constants_1 = require("../infrastructure/constants");
var index_1 = require("../../../core-module/index");
var AuthGuardService = (function () {
    function AuthGuardService(_router, _logger) {
        this._router = _router;
        this._logger = _logger;
        this._logger.info("AuthGuard : constructor ");
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        this._logger.info("AuthGuard : canActivate");
        this.throwBusinessErrors(url);
        return true;
    };
    AuthGuardService.prototype.throwBusinessErrors = function (url) {
        this._logger.info("AuthGuard : throwBusinessErrors");
        var isError = false;
        var errorCode;
        if (url.indexOf(constants_1.Constants.businessExceptions.SessionExpired) != -1 || url.indexOf(constants_1.Constants.businessExceptions.SessionKilled) != -1) {
            isError = true;
            errorCode = index_1.ErrorCode.UserSessionExpired;
        }
        else if (url.indexOf(constants_1.Constants.businessExceptions.ErrorCode) != -1) {
            isError = true;
            errorCode = url.split("=")[1];
        }
        if (isError && errorCode != null) {
            setTimeout(function () {
                throw new index_1.HttpError(errorCode, index_1.ErroNotificationType.Toaster);
            }, 1000);
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        core_2.Logger])
], AuthGuardService);
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map