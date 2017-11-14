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
var index_1 = require("../index");
var index_2 = require("../toastr/index");
var GlobalErrorLoggingService = (function () {
    function GlobalErrorLoggingService(_logger, _translate, _globalToastrService) {
        this._logger = _logger;
        this._translate = _translate;
        this._globalToastrService = _globalToastrService;
        this.isHandledError = true;
        this._logger.info("GlobalErrorLoggingService : constructor ");
    }
    GlobalErrorLoggingService.prototype.logError = function (error, isLogToConsole, isSendToServer) {
        var _this = this;
        this._logger.info("GlobalErrorLoggingService : logError ");
        this._notificationType = index_1.ErroNotificationType.Dialog;
        if (error instanceof index_1.HttpError) {
            this._notificationType = error.erroNotificationType;
            if (this._notificationType == index_1.ErroNotificationType.Dialog) {
                this._translate.get('MESSAGES.Dialog.' + error.code)
                    .subscribe(function (successResponse) {
                    _this._errorDialogTitle = successResponse.title;
                    _this._errorDialogMessage = successResponse.message;
                    _this._primaryButtton = successResponse.primaryButton;
                    _this._secondaryButton = successResponse.secondaryButton;
                    _this._isShowSecondaryButton = JSON.parse(successResponse.isShowSecondaryButton);
                    _this._isLogoutonPrimaryButton = JSON.parse(successResponse.isLogoutOnPrimaryButton);
                }, function (errorResponse) {
                });
            }
            else {
                this._notificationType = index_1.ErroNotificationType.Toaster;
            }
        }
        else {
            this._notificationType = index_1.ErroNotificationType.Toaster;
            this.isHandledError = false;
        }
        if (isLogToConsole) {
            if (this._notificationType == index_1.ErroNotificationType.Dialog)
                this._logger.error(this._errorDialogMessage);
            this._logger.error(error);
            if (error.stack != undefined)
                this._logger.error(error.stack);
        }
        if (isSendToServer) {
            //TODO : write API to post error data to.
        }
        if (this._notificationType == index_1.ErroNotificationType.Dialog) {
            this.showErrorDialog(this._errorDialogTitle, this._errorDialogMessage, this._primaryButtton, this._isLogoutonPrimaryButton, this._isShowSecondaryButton, this._secondaryButton);
        }
        else if (this._notificationType == index_1.ErroNotificationType.Toaster) {
            if (this.isHandledError)
                this._globalToastrService.showErrorToastr(error.code, error.messageParams);
            else
                this._globalToastrService.showErrorToastr(index_1.ErrorCode.Fatal, null);
        }
    };
    return GlobalErrorLoggingService;
}());
GlobalErrorLoggingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger,
        ng2_translate_1.TranslateService,
        index_2.ToastrService])
], GlobalErrorLoggingService);
exports.GlobalErrorLoggingService = GlobalErrorLoggingService;
//# sourceMappingURL=global-error-logging.service.js.map