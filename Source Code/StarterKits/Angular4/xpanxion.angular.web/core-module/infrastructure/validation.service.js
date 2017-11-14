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
var ValidationService = (function () {
    function ValidationService(_logger) {
        var _this = this;
        this._logger = _logger;
        this.regExpValidator = function (regExPattern, valueToValidate, flags) {
            _this._logger.info("ValidationService: regExpValidator");
            var flags = flags || ''; //set the regex flags if supplied (optional)
            var regEx = new RegExp(regExPattern, flags);
            return regEx.test(valueToValidate); // test and set the validity after update. 
        };
        this._logger.info("ValidationService : constructor ");
    }
    ValidationService.prototype.isNumberKey = function (event) {
        this._logger.info("ValidationService : isNumberKey ");
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && !event.ctrlKey)
            return false;
        return true;
    };
    ValidationService.prototype.isEnterKey = function (event) {
        this._logger.info("ValidationService : isEnterKey ");
        return ((event.keyCode || event.which) == 13);
    };
    return ValidationService;
}());
ValidationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger])
], ValidationService);
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map