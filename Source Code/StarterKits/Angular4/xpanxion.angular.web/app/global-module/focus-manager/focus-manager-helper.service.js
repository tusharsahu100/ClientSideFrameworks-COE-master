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
var index_1 = require("../services/index");
var index_2 = require("./index");
var FocusManagerHelperService = (function () {
    function FocusManagerHelperService(_logger, _notificationService) {
        var _this = this;
        this._logger = _logger;
        this._notificationService = _notificationService;
        this.setPopupFocusIndexes = function (containerElement, isChildClosing) {
            _this._logger.info("FocusManagerHelperService : setPopupFocusIndexes");
            var focusManagerData = new index_2.FocusManagerModel();
            if (isChildClosing !== undefined && isChildClosing === true) {
                focusManagerData.setPreviousActiveIndex = false;
                focusManagerData.restorePreviousActiveIndex = true;
            }
            else {
                focusManagerData.setPreviousActiveIndex = true;
            }
            focusManagerData.element = containerElement;
            _this._notificationService.notifyEventContentLoaded(focusManagerData);
        };
        this.setFocusIndexes = function (containerElement, retainCurrentActiveIndex) {
            _this._logger.info("FocusManagerHelperService : setFocusIndexes");
            var focusManagerData = new index_2.FocusManagerModel();
            focusManagerData.retainCurrentActiveIndex = retainCurrentActiveIndex;
            focusManagerData.element = containerElement;
            _this._notificationService.notifyEventContentLoaded(focusManagerData);
        };
        this.resetFocusIndexes = function () {
            _this._logger.info("FocusManagerHelperService : resetFocusIndexes");
            var focusManagerData = new index_2.FocusManagerModel();
            focusManagerData.setPreviousActiveIndex = false;
            focusManagerData.restorePreviousActiveIndex = true;
            _this._notificationService.notifyEventContentLoaded(focusManagerData);
        };
        this.rebuildFocusIndexes = function () {
            _this._logger.info("FocusManagerHelperService : rebuildFocusIndexes");
            var focusManagerData = new index_2.FocusManagerModel();
            focusManagerData.setPreviousActiveIndex = false;
            _this._notificationService.notifyEventContentLoaded(focusManagerData);
        };
        this.setFocusToElement = function (elementToFocus) {
            elementToFocus.nativeElement.focus();
        };
        this._logger.info("FocusManagerHelperService : constructor ");
    }
    return FocusManagerHelperService;
}());
FocusManagerHelperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger,
        index_1.NotificationService])
], FocusManagerHelperService);
exports.FocusManagerHelperService = FocusManagerHelperService;
;
//# sourceMappingURL=focus-manager-helper.service.js.map