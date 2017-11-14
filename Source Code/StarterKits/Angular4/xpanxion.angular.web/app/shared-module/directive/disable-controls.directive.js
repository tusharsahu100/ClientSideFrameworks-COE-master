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
var ng2_translate_1 = require("ng2-translate");
var core_2 = require("angular2-logger/core");
var index_1 = require("../../global-module/index");
var DisableControls = (function () {
    function DisableControls(el, renderer, _notificationService, _sharedDataService, _translateService, _logger) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this._notificationService = _notificationService;
        this._sharedDataService = _sharedDataService;
        this._translateService = _translateService;
        this._logger = _logger;
        this._logger.info("DisableControls : constructor ");
        this.parentElement = el;
        this._translateService.get('SHARED.DISABLECONTROLS.ModalHeader').subscribe(function (resource) {
            _this.modelHeader = resource;
        });
        this._translateService.get('SHARED.DISABLECONTROLS.ResetLink').subscribe(function (resource) {
            _this.reset = resource;
        });
    }
    DisableControls.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._logger.info("DisableControls : ngAfterViewInit ");
        this._notificationService.disableUINotification.subscribe(function () {
            _this.disableAllElements(_this.parentElement.nativeElement);
        });
    };
    DisableControls.prototype.disableAllElements = function (currentElement) {
        this._logger.info("DisableControls : disableAllElements ");
        if (currentElement != undefined && currentElement.childElementCount != undefined && currentElement.childElementCount > 0) {
            for (var i = 0; i < currentElement.childElementCount; i++) {
                if (currentElement.children[i].tagName != this.modelHeader) {
                    if (currentElement.children[i].innerText != this.reset && currentElement.children[i].value != this.reset) {
                        if (this._sharedDataService.isDisableUIElements == true)
                            currentElement.children[i].setAttribute("disabled", "true");
                        else
                            currentElement.children[i].removeAttribute("disabled");
                    }
                    else {
                        if (this._sharedDataService.isDisableUIElements == true)
                            currentElement.children[i].setAttribute("style", "visibility: hidden");
                        else
                            currentElement.children[i].setAttribute("style", "visibility: visible");
                    }
                    this.disableAllElements(currentElement.children[i]);
                }
            }
        }
    };
    return DisableControls;
}());
DisableControls = __decorate([
    core_1.Directive({
        selector: '[disable-controls]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        index_1.NotificationService,
        index_1.SharedDataService,
        ng2_translate_1.TranslateService,
        core_2.Logger])
], DisableControls);
exports.DisableControls = DisableControls;
//# sourceMappingURL=disable-controls.directive.js.map