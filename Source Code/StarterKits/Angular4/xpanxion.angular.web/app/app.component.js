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
var ng2_translate_1 = require("ng2-translate");
var router_1 = require("@angular/router");
var index_1 = require("./global-module/index");
var index_2 = require("./shared-module/index");
var index_3 = require("../core-module/index");
var AppComponent = (function () {
    function AppComponent(_logger, _translate, _router, _authService, _notificationService, _sharedDataService) {
        this._logger = _logger;
        this._translate = _translate;
        this._router = _router;
        this._authService = _authService;
        this._notificationService = _notificationService;
        this._sharedDataService = _sharedDataService;
        this.isUserLoggedIn = false;
        this._logger.info("AppComponent : constructor ");
        this._logger.level = index_2.ConfigurationSettings.LogLevel;
        this._logger.info("AppComponent : constructor => language configured");
        _translate.addLangs(index_2.ConfigurationSettings.supportedBrowserLanguages);
        _translate.setDefaultLang(index_2.ConfigurationSettings.fallbackBrowserLanguage);
        var browserLang = _translate.getBrowserLang();
        this._logger.info("AppComponent : constructor => Current browserLang Is :" + browserLang);
        var languageConfiguredForApplication = browserLang.match(index_2.ConfigurationSettings.supportedBrowserLanguages.join("|")) ? browserLang : index_2.ConfigurationSettings.fallbackBrowserLanguage;
        _translate.use(languageConfiguredForApplication);
        this._logger.info("AppComponent : constructor => Application language is set to :" + languageConfiguredForApplication);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = this._authService.isUserLoggedIn();
        this._logger.info("AppComponent : ngOnInit() ");
    };
    AppComponent.prototype.onWindowResized = function (event) {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        template: "<a href=\"javascript:void(0);\" onclick=\"document.location.hash='main-content-area';\" class=\"skip-nav\">Skip to main content</a>\n                <error-dialog></error-dialog>\n                <toastr></toastr>\n                <div *ngIf=\"isUserLoggedIn\" (window:resize)=\"onWindowResized($event)\">\n                    <home-app focus-manager></home-app>\n                </div>\n              "
    }),
    __metadata("design:paramtypes", [core_2.Logger,
        ng2_translate_1.TranslateService,
        router_1.Router,
        index_3.AuthService,
        index_1.NotificationService,
        index_1.SharedDataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map