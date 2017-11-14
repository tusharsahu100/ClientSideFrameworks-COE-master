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
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var core_2 = require("angular2-logger/core");
var EnvironmentConfig = (function () {
    function EnvironmentConfig() {
    }
    return EnvironmentConfig;
}());
exports.EnvironmentConfig = EnvironmentConfig;
var UtilityService = (function () {
    function UtilityService(_logger, _config) {
        var _this = this;
        this._logger = _logger;
        this._config = _config;
        this.features = "width = 800, height = 580, top = 15, left == 15, location=no,directories=no,titlebar=no,status=no, toolbar = no, menubar = no, scrollbars = 1, resizable = 1, location = 0";
        //First parameter URL is mandatory, other parameters are optional.
        this.openInNewWindow = function (url, target, features, replace) {
            _this._logger.info("UtilityService : openInNewWindow");
            if (url != undefined && url != "") {
                features = (features != undefined && features != "") ? features : _this.features;
                return window.open(url, target, features, replace);
            }
            else {
                return null;
            }
        };
        this.openInNewTab = function (url, target) {
            _this._logger.info("UtilityService : openInNewTab");
            if (url != undefined && url != "") {
                window.open(url, target);
            }
        };
        this._logger.info("UtilityService : constructor ");
        this.environmentName = _config.environmentName;
    }
    UtilityService.prototype.redirectToURL = function (href) {
        window.location.href = href;
    };
    UtilityService.prototype.getCookie = function (cookieName) {
        return ng2_cookies_1.Cookie.get(this.environmentName + cookieName);
    };
    UtilityService.prototype.setCookie = function (cookieName, value) {
        document.cookie = this.environmentName + cookieName + "=" + value + ";domain=.client.com; path = /";
    };
    UtilityService.prototype.deleteCookie = function (cookieName) {
        ng2_cookies_1.Cookie.delete(this.environmentName + cookieName);
    };
    UtilityService.prototype.doesCookieExists = function (cookieName) {
        if (ng2_cookies_1.Cookie.get(this.environmentName + cookieName))
            return true;
        return false;
    };
    UtilityService.prototype.hideAppLoadingWidget = function () {
        var appLazyLoadingElement = document.getElementById("appInitloadingWidget");
        if (appLazyLoadingElement)
            appLazyLoadingElement.style.visibility = "hidden";
    };
    UtilityService.prototype.showAppLoadingWidget = function () {
        var appLazyLoadingElement = document.getElementById("appInitloadingWidget");
        if (appLazyLoadingElement)
            appLazyLoadingElement.style.visibility = "visible";
    };
    UtilityService.prototype.roundToNearestTenth = function (input) {
        return (input % 10 <= 5) ? this.roundToLowerTenth(input) : this.roundToUpperTenth(input);
    };
    UtilityService.prototype.roundToLowerTenth = function (input) {
        return parseInt((input / 10).toString()) * 10;
    };
    UtilityService.prototype.roundToUpperTenth = function (input) {
        return parseInt((input / 10).toString()) * 10 + 10;
    };
    UtilityService.prototype.floor = function (input, decimalPlaces) {
        return Math.floor(input * parseInt(Math.pow(10, decimalPlaces).toString()) / parseInt(Math.pow(10, decimalPlaces).toString()));
    };
    UtilityService.prototype.ceiling = function (input, decimalPlaces) {
        return Math.ceil(input * parseInt(Math.pow(10, decimalPlaces).toString())) / parseInt(Math.pow(10, decimalPlaces).toString());
    };
    UtilityService.prototype.round = function (input, decimalPlaces) {
        return Math.round(input * parseInt(Math.pow(10, decimalPlaces).toString())) / parseInt(Math.pow(10, decimalPlaces).toString());
    };
    UtilityService.prototype.contains = function (array, searchTerm) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].trim() == searchTerm)
                return true;
        }
        return false;
    };
    return UtilityService;
}());
UtilityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger,
        EnvironmentConfig])
], UtilityService);
exports.UtilityService = UtilityService;
//# sourceMappingURL=utility.service.js.map