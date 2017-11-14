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
var index_1 = require("../index");
var message_helper_service_1 = require("./message-helper.service");
var ToastrService = (function () {
    function ToastrService(_logger, _toastrMessageHelperService) {
        this._logger = _logger;
        this._toastrMessageHelperService = _toastrMessageHelperService;
        this._logger.info("ToastrService : constructor ");
    }
    ToastrService.prototype.showErrorToastr = function (errorCode, messageParams) {
        this._logger.info("ToastrService : showErrorToastr ");
        var toastrMessage = this.getToastrMessage(errorCode, messageParams);
        this.showToastrMessage(toastrMessage.messageType, toastrMessage.message);
    };
    ToastrService.prototype.showToastr = function (toastrCode, messageParams) {
        this._logger.info("ToastrService : showToastr ");
        var toastrMessage = this.getToastrMessage(toastrCode, messageParams);
        this.showToastrMessage(toastrMessage.messageType, toastrMessage.message);
    };
    ToastrService.prototype.showToastrMessage = function (messageType, message) {
        this._logger.info("ToastrService : showToastrMessage ");
        switch (messageType) {
            case index_1.ToastrMessageType.Error:
                this.showToastrError(message);
                break;
            case index_1.ToastrMessageType.Information:
                this.showToastrInformation(message);
                break;
            case index_1.ToastrMessageType.Success:
                this.showToastrSuccess(message);
                break;
            case index_1.ToastrMessageType.Warning:
                this.showToastrWarning(message);
                break;
            case index_1.ToastrMessageType.Custom:
                this.showToastrCustom(message);
                break;
        }
        if (messageType != index_1.ToastrMessageType.Information) {
            this._logger.log(message);
        }
    };
    ToastrService.prototype.getToastrMessage = function (toastrCode, messageParams) {
        this._logger.info("ToastrService : getToastrMessage ");
        return this._toastrMessageHelperService.getFormattedToastrMessage(toastrCode, messageParams);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger,
        message_helper_service_1.ToastrMessageHelperService])
], ToastrService);
exports.ToastrService = ToastrService;
//# sourceMappingURL=toastr.service.js.map