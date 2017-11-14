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
var index_1 = require("../index");
var ng2_translate_1 = require("ng2-translate");
var core_2 = require("angular2-logger/core");
var ToastrMessageHelperService = (function () {
    function ToastrMessageHelperService(_logger, _translate) {
        var _this = this;
        this._logger = _logger;
        this._translate = _translate;
        this.getFormattedToastrMessage = function (toastrCode, messageParams) {
            _this._logger.info("ToastrMessageHelperService : getFormattedToastrMessage");
            var toastrKey = 'MESSAGES.Toastr.';
            var toastrMessage = new index_1.ToastrMessage();
            if (messageParams == null) {
                _this._translate.get(toastrKey + toastrCode)
                    .subscribe(function (successResponse) {
                    _this._logger.info("ToastrMessageHelperService : getFormattedToast : Success");
                    toastrMessage.message = successResponse.message;
                    toastrMessage.messageType = successResponse.messageType;
                }, function (errorResponse) {
                    _this._logger.info("ToastrMessageHelperService : getFormattedToastrMessage : Error");
                });
            }
            else {
                _this._translate.get(toastrKey + toastrCode)
                    .subscribe(function (successResponse) {
                    _this._logger.info("ToastrMessageHelperService : getFormattedToastrMessage : Success");
                    toastrMessage.messageType = successResponse.messageType;
                    _this._translate.get(toastrKey + toastrCode + '.message', messageParams)
                        .subscribe(function (transformedMessageResponse) {
                        toastrMessage.message = transformedMessageResponse;
                    });
                }, function (errorResponse) {
                    _this._logger.info("ToastrMessageHelperService : getFormattedToastrMessage : Error");
                });
            }
            return toastrMessage;
        };
        this._logger.info("ToastrMessageHelperService : constructor ");
    }
    return ToastrMessageHelperService;
}());
ToastrMessageHelperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger,
        ng2_translate_1.TranslateService])
], ToastrMessageHelperService);
exports.ToastrMessageHelperService = ToastrMessageHelperService;
;
//# sourceMappingURL=message-helper.service.js.map