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
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var index_1 = require("./index");
var GlobalErrorDialogComponent = (function () {
    function GlobalErrorDialogComponent(router, _logger, _globalErrorLoggingService) {
        this.router = router;
        this._logger = _logger;
        this._globalErrorLoggingService = _globalErrorLoggingService;
        this._logger.info("GlobalErrorDialogComponent : ngOnInit ");
        _globalErrorLoggingService.showErrorDialog = this.showErrorDialog.bind(this);
    }
    GlobalErrorDialogComponent.prototype.showErrorDialog = function (errorDialogTitle, customErrorMessage, primaryButtonText, isLogoutOnPrimaryButtonEvent, isShowSecondaryButton, secondaryButtonText) {
        this._logger.info("GlobalErrorDialogComponent : showErrorDialog ");
        this._dialogTitle = errorDialogTitle;
        this._message = customErrorMessage;
        this._isShowSecondaryButton = isShowSecondaryButton;
        this._primaryButtonText = primaryButtonText;
        this._secondaryButtonText = secondaryButtonText;
        this._isLogoutOnPrimaryButtonEvent = isLogoutOnPrimaryButtonEvent;
        this._modal.open();
    };
    GlobalErrorDialogComponent.prototype.logout = function () {
        this._logger.info("GlobalErrorDialogComponent : logout ");
    };
    GlobalErrorDialogComponent.prototype.initDialogData = function () {
        this._logger.info("GlobalErrorDialogComponent : initDialogData ");
    };
    return GlobalErrorDialogComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], GlobalErrorDialogComponent.prototype, "_modal", void 0);
GlobalErrorDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'error-dialog',
        templateUrl: 'global-error-dialog.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [router_1.Router,
        core_2.Logger,
        index_1.GlobalErrorLoggingService])
], GlobalErrorDialogComponent);
exports.GlobalErrorDialogComponent = GlobalErrorDialogComponent;
//# sourceMappingURL=global-error-dialog.component.js.map