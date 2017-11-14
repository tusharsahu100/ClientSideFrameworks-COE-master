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
var router_1 = require("@angular/router");
var index_1 = require("../../global-module/index");
var index_2 = require("../infrastructure/index");
var index_3 = require("../header/index");
var index_4 = require("../../../core-module/index");
var environment_1 = require("../../environment");
var HeaderComponent = (function () {
    function HeaderComponent(_router, _logger, _sharedDataService, _utilityService, _authService, _notificationService) {
        this._router = _router;
        this._logger = _logger;
        this._sharedDataService = _sharedDataService;
        this._utilityService = _utilityService;
        this._authService = _authService;
        this._notificationService = _notificationService;
        this._logger.info("HeaderComponent : constructor ");
        this.userName = this._sharedDataService._sharedData.firstName;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this._logger.info("HeaderComponent : ngOnInit");
    };
    HeaderComponent.prototype.showLogoutConfirmation = function () {
        this._logger.info("HeaderComponent : showLogoutConfirmation ");
        this.logoutComp.showConfirmation();
    };
    HeaderComponent.prototype.onLogoutConfirmation = function (eventData) {
        var _this = this;
        this._logger.info("HeaderComponent : onLogoutConfirmation ");
        var logoutURL = index_2.ConfigurationSettings.appURL;
        this._authService.logOut(index_2.Constants.webApis.logout)
            .subscribe(function (successResponse) {
            _this._logger.info("HeaderComponent : logOut : Success ");
            var url = environment_1.Environment.appUrl + "?" + index_2.Constants.queryString.SessionExpired;
            if (successResponse.url.indexOf(index_2.Constants.queryString.SessionExpired) >= 0 || successResponse.url.indexOf(index_2.Constants.queryString.SessionKilled) >= 0) {
                _this._utilityService.redirectToURL(url);
                return;
            }
            if (successResponse.headers.get(index_2.Constants.requestHeader.contentType) != index_2.Constants.contentType.json) {
                _this._utilityService.redirectToURL(url);
                return;
            }
            var response = successResponse.json();
            localStorage.clear();
            _this._utilityService.redirectToURL(environment_1.Environment.appUrl);
        }, function (errorResponse) {
            _this._logger.error("HeaderComponent : logOut : Error");
            _this._utilityService.redirectToURL(logoutURL);
        });
    };
    HeaderComponent.prototype.openInNewWindow = function (url) {
        this._logger.info("HeaderComponent : openInNewWindow ");
        this._utilityService.openInNewWindow(url);
    };
    HeaderComponent.prototype.toggleUserMenu = function (closeMenu) {
        var classOpen = "open";
        if (!this.userNavigationMenu.nativeElement.classList.contains(classOpen) && (closeMenu === undefined || closeMenu === false)) {
            this.userNavigationMenu.nativeElement.classList.add(classOpen);
        }
        else {
            this.userNavigationMenu.nativeElement.classList.remove(classOpen);
        }
    };
    return HeaderComponent;
}());
__decorate([
    core_1.ViewChild('logout'),
    __metadata("design:type", index_3.LogoutConfirmationComponent)
], HeaderComponent.prototype, "logoutComp", void 0);
__decorate([
    core_1.ViewChild('userNavigationMenu'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "userNavigationMenu", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'header',
        templateUrl: 'header.component.html',
        styleUrls: ['header.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        core_2.Logger,
        index_1.SharedDataService,
        index_4.UtilityService,
        index_4.AuthService,
        index_1.NotificationService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map