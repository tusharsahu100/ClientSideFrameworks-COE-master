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
var index_1 = require("../../global-module/index");
var NavigationComponent = (function () {
    function NavigationComponent(_router, _logger, _sharedDataService, _notificationService) {
        this._router = _router;
        this._logger = _logger;
        this._sharedDataService = _sharedDataService;
        this._notificationService = _notificationService;
        this.subscriptions = [];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logger.info("NavigationComponent : ngOnInit ");
        this.subscriptions.push(this._notificationService.productAddedToCartFromDialogNotification.subscribe(function () {
            _this.cartCount = 10; // get from server
        }), this._notificationService.productAddedToCartNotification.subscribe(function () {
            _this.cartCount = 10; // get from server
        }));
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        this._logger.info("NavigationComponent : ngOnDestroy ");
        this.subscriptions.forEach(function (s) {
            s.unsubscribe();
        });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'navigation-tabs',
        templateUrl: 'navigation.component.html',
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.Router,
        core_2.Logger,
        index_1.SharedDataService,
        index_1.NotificationService])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map