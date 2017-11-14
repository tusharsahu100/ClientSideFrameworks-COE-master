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
var ng2_translate_1 = require("ng2-translate");
var index_1 = require("./shared/index");
var PublicAppComponent = (function () {
    function PublicAppComponent(_logger, _translate, _router, _notificationService) {
        this._logger = _logger;
        this._translate = _translate;
        this._router = _router;
        this._notificationService = _notificationService;
        this._logger.info("PublicAppComponent : constructor ");
        this._logger.level = index_1.ConfigurationSettings.LogLevel;
        _translate.addLangs(index_1.ConfigurationSettings.supportedBrowserLanguages);
        _translate.setDefaultLang(index_1.ConfigurationSettings.fallbackBrowserLanguage);
        var browserLang = _translate.getBrowserLang();
        this._logger.info("PublicAppComponent : constructor => Current browserLang Is :" + browserLang);
        var languageConfiguredForApplication = browserLang.match(index_1.ConfigurationSettings.supportedBrowserLanguages.join("|")) ? browserLang : index_1.ConfigurationSettings.fallbackBrowserLanguage;
        _translate.use(languageConfiguredForApplication);
        this._logger.info("PublicAppComponent : constructor => Application language is set to :" + languageConfiguredForApplication);
    }
    PublicAppComponent.prototype.onWindowResized = function (event) {
        this._logger.info("PublicAppComponent : onWindowResized");
        if (this._router.url == "/")
            this._notificationService.windowResizeNotification.next();
    };
    PublicAppComponent.prototype.ngOnInit = function () {
        this._logger.info("PublicAppComponent : ngOnInit() ");
    };
    return PublicAppComponent;
}());
PublicAppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        template: " <error-dialog></error-dialog>\n                <toastr></toastr>\n                <div (window:resize)=\"onWindowResized($event)\">\n                    <public-app></public-app>\n                </div>\n              "
    }),
    __metadata("design:paramtypes", [core_2.Logger,
        ng2_translate_1.TranslateService,
        router_1.Router,
        index_1.NotificationService])
], PublicAppComponent);
exports.PublicAppComponent = PublicAppComponent;
//# sourceMappingURL=public-app.component.js.map