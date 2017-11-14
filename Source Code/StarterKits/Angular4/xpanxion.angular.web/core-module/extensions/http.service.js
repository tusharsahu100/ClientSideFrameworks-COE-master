"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/finally");
var index_1 = require("../infrastructure/index");
var index_2 = require("../extensions/index");
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options, utilityService, authService) {
        var _this = _super.call(this, backend, options) || this;
        _this.authService = authService;
        return _this;
    }
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        if (!options) {
            options = { headers: new http_1.Headers() };
        }
        options.withCredentials = false;
        this.authService.setAuthHeaders(options);
        return _super.prototype.get.call(this, url, options)
            .catch(function (error) {
            if (error.status == 403) {
                return _this.authService
                    .refreshApiToken()
                    .mergeMap(function (accessToken) {
                    _this.authService.setAuthHeaders(options);
                    return _super.prototype.get.call(_this, url, options);
                });
            }
            return _this.handleError(error);
        })
            .finally(function () {
        });
    };
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        if (!options) {
            options = { headers: new http_1.Headers() };
        }
        options.withCredentials = false;
        this.authService.setAuthHeaders(options);
        return _super.prototype.post.call(this, url, body, options)
            .catch(function (error) {
            if (error.status == 403) {
                return _this.authService
                    .refreshApiToken()
                    .mergeMap(function (accessToken) {
                    _this.authService.setAuthHeaders(options);
                    return _super.prototype.post.call(_this, url, body, options);
                });
            }
            return _this.handleError(error);
        })
            .finally(function () {
        });
    };
    HttpService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return HttpService;
}(http_1.Http));
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend,
        http_1.RequestOptions,
        index_1.UtilityService,
        index_2.AuthService])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map