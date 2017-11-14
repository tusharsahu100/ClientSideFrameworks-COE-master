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
var Subject_1 = require("rxjs/Subject");
var index_1 = require("../../../core-module/index");
var NotificationService = (function () {
    function NotificationService(_http, _logger) {
        this._http = _http;
        this._logger = _logger;
        this.productAddedToCartNotification = new Subject_1.Subject();
        this.productAddedToCartFromDialogNotification = new Subject_1.Subject();
        this.disableUINotification = new Subject_1.Subject();
        this.contentLoadedNotification = new Subject_1.Subject();
        this._logger.info("NotificationService : constructor");
    }
    NotificationService.prototype.notifyProductAddedToCart = function () {
        this._logger.info("NotificationService : notifyNonCatalogProductAddedToCart");
        this.productAddedToCartNotification.next();
    };
    NotificationService.prototype.notifyProductAddedToCartFromDialog = function () {
        this._logger.info("NotificationService : notifyNonCatalogProductAddedToCart");
        this.productAddedToCartFromDialogNotification.next();
    };
    NotificationService.prototype.notifyEventContentLoaded = function (focusManagerModel) {
        this._logger.info("NotificationService : notifyEventContentLoaded");
        this.contentLoadedNotification.next(focusManagerModel);
    };
    NotificationService.prototype.notifyDisableUI = function () {
        this._logger.info("NotificationService : notifyDisableUI");
        this.disableUINotification.next();
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService,
        core_2.Logger])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notifications.service.js.map