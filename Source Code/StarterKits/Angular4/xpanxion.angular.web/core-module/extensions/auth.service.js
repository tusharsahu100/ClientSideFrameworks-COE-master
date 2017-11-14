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
var core_2 = require("angular2-logger/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
var http_1 = require("@angular/http");
var index_1 = require("../index");
var index_2 = require("../infrastructure/index");
var api_token_model_1 = require("./api-token.model");
var AuthService = (function () {
    function AuthService(_logger, _utilityService, _http, _config) {
        this._logger = _logger;
        this._utilityService = _utilityService;
        this._http = _http;
        this._config = _config;
        // to be used internally, use externaly via isUserLoggedIn() method
        this.isLoggedIn = false;
        this.isRefreshTokenCallInProgress = false;
        this._logger.info("AuthService : constructor ");
        this.apiToken = JSON.parse(localStorage.getItem(index_2.Constants.localStorageKeys.apiToken));
        this.isLoggedIn = localStorage.getItem(index_2.Constants.localStorageKeys.isLoggedIn) == "true";
        this.sessionId = localStorage.getItem(index_2.Constants.localStorageKeys.sessionId);
    }
    AuthService.prototype.isUserLoggedIn = function () {
        return this.isLoggedIn;
    };
    AuthService.prototype.logOut = function (url) {
        this.isLoggedIn = false;
        this._logger.info("AuthService : LogOut");
        var options = { headers: new http_1.Headers() };
        options.withCredentials = false;
        this.setAuthHeaders(options);
        return this._http.post(url, null, options);
    };
    AuthService.prototype.setAuthHeaders = function (options) {
        if (!options.headers) {
            options.headers = new http_1.Headers();
        }
        // reset password requires webapi access before login
        if (this.apiToken) {
            options.headers.set(index_2.Constants.requestHeader.authorization, index_2.Constants.requestHeader.bearer + " " + this.apiToken.access_token);
            options.headers.set(index_2.Constants.requestHeader.sessionId, "" + this.sessionId);
        }
        options.headers.set(index_2.Constants.requestHeader.accept, index_2.Constants.contentType.json);
    };
    AuthService.prototype.refreshApiToken = function () {
        var _this = this;
        if (this.isRefreshTokenCallInProgress) {
            return Observable_1.Observable.of(true).delay(5000);
        }
        this._logger.info("AuthService : refreshToken");
        var params = index_2.Constants.apiToken.refreshToken + this.apiToken.refresh_token;
        var headers = new http_1.Headers();
        headers.set(index_2.Constants.requestHeader.contentType, index_2.Constants.contentType.formUrlEncoded);
        this.isRefreshTokenCallInProgress = true;
        return this._http.post(this._config.apiTokenUrl, params, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.isRefreshTokenCallInProgress = false;
            var token = new api_token_model_1.ApiTokenModel();
            token.access_token = data.access_token;
            token.refresh_token = data.refresh_token;
            token[".expires"] = data[".expires"];
            _this.apiToken = token;
            localStorage.setItem(index_2.Constants.localStorageKeys.apiToken, JSON.stringify(token));
        })
            .catch(function (error) {
            _this._utilityService.redirectToURL(_this._config.appUrl);
            return Observable_1.Observable.of(false);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger,
        index_1.UtilityService,
        http_1.Http,
        index_1.EnvironmentConfig])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map