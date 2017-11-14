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
var index_1 = require("../extensions/index");
var index_2 = require("../infrastructure/index");
var spinner_service_1 = require("../spinner/spinner.service");
var index_3 = require("./index");
var LoggingErrorHandlerOptions = (function () {
    function LoggingErrorHandlerOptions() {
    }
    return LoggingErrorHandlerOptions;
}());
exports.LoggingErrorHandlerOptions = LoggingErrorHandlerOptions;
var GlobalErrorHandlerComponent = (function () {
    function GlobalErrorHandlerComponent(_globalErrorLoggingService, _options, _logger, _spinner, _utilityService, _authService, _config) {
        this._globalErrorLoggingService = _globalErrorLoggingService;
        this._logger = _logger;
        this._spinner = _spinner;
        this._utilityService = _utilityService;
        this._authService = _authService;
        this._config = _config;
        this._logger.info("ErrorHandler : constructor");
        this.options = _options;
    }
    GlobalErrorHandlerComponent.prototype.handleError = function (error) {
        var url = this._config.appUrl + "?" + index_2.Constants.queryString.SessionExpired;
        try {
            this._logger.info("ErrorHandler : handleError()");
            var sessionId = localStorage.getItem(index_2.Constants.localStorageKeys.sessionId);
            if (this._authService.isUserLoggedIn() && (sessionId == null || sessionId == undefined || sessionId == "")) {
                this._utilityService.redirectToURL(url);
                return;
            }
            if (error && error.error && error.error.status == 0) {
                return;
            }
            if (error && error.error && error.error.status == 405) {
                this._utilityService.redirectToURL(url);
                return;
            }
            this._spinner.stop();
            this.options.isUnwrapError
                ? this._globalErrorLoggingService.logError(this.findOriginalError(error), this.options.isLogErrorToConsole, this.options.isSendErrorToServer)
                : this._globalErrorLoggingService.logError(error, this.options.isLogErrorToConsole, this.options.isSendErrorToServer);
        }
        catch (loggingError) {
            this._logger.error("Error when trying to log error to", this._globalErrorLoggingService);
            this._utilityService.redirectToURL(url);
            return;
        }
        if (this.options.isRethrowError) {
            throw (error);
        }
    };
    GlobalErrorHandlerComponent.prototype.findOriginalError = function (error) {
        this._logger.info("ErrorHandler : findOriginalError()");
        while (error && error.originalError)
            error = error.originalError;
        return (error);
    };
    return GlobalErrorHandlerComponent;
}());
GlobalErrorHandlerComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_3.GlobalErrorLoggingService,
        LoggingErrorHandlerOptions,
        core_2.Logger,
        spinner_service_1.SpinnerService,
        index_2.UtilityService,
        index_1.AuthService,
        index_2.EnvironmentConfig])
], GlobalErrorHandlerComponent);
exports.GlobalErrorHandlerComponent = GlobalErrorHandlerComponent;
//# sourceMappingURL=global-error-handler.component.js.map