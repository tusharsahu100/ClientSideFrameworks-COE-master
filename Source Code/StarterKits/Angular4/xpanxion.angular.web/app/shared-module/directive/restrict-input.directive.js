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
var index_1 = require("../infrastructure/index");
var index_2 = require("../../../core-module/index");
var RestrictInput = (function () {
    function RestrictInput(el, _toastrService, _validationService) {
        var _this = this;
        this.el = el;
        this._toastrService = _toastrService;
        this._validationService = _validationService;
        this._backSpaceKey = 8;
        this._tabKey = 9;
        this._deleteKey = 16;
        this._leftArrowKey = 37;
        this._rightArrowKey = 39;
        this.setRegExp = function () {
            // Change error messages as per specific RegEx type if needed (it would apply to all fields)
            switch (_this.regExType) {
                case 'numeric':
                    _this._regx = index_1.Constants.regExType.numeric;
                    break;
                case 'alphanumeric':
                    _this._regx = index_1.Constants.regExType.alphanumeric;
                    break;
                case 'alphanumWithSpecial1':
                    _this._regx = index_1.Constants.regExType.alphanumWithSpecial1;
                    break;
                case 'decimalPrecisionFour':
                    _this._regx = index_1.Constants.regExType.decimalPrecisionFour;
                    break;
                case 'decimalPrecisionTwo':
                    _this._regx = index_1.Constants.regExType.decimalPrecisionTwo;
                    break;
                case 'negativedecimalPrecisionFour':
                    _this._regx = index_1.Constants.regExType.negativedecimalPrecisionFour;
                    break;
                default:
                    _this._regx = index_1.Constants.regExType.alphanumWithSpecial1;
            }
        };
        this.validateInput = function (inputValue, regx) {
            return _this._validationService.regExpValidator(regx.source, inputValue);
        };
    }
    RestrictInput.prototype.keypress = function (event) {
        this.setRegExp();
        var charCode = (event.which) ? event.which : event.keyCode;
        //allow alter key, tab, backspace, delete, left arrow & right arrow keys
        if (event.altKey === true || charCode === this._tabKey || charCode === this._backSpaceKey || charCode === this._deleteKey
            || charCode === this._leftArrowKey || charCode === this._rightArrowKey) {
            return true;
        }
        //detect ctrl allow it to proceed further to catch paste event (metaKey is for Mac)
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        var inputValue = this.el.nativeElement.value + String.fromCharCode(charCode);
        return this.validateInput(inputValue, this._regx);
    };
    RestrictInput.prototype.paste = function (event) {
        this.setRegExp();
        var clipboardData = event.clipboardData;
        var inputValue = clipboardData.getData('text/plain');
        var isValidInput = this.validateInput(inputValue, this._regx);
        return isValidInput;
    };
    return RestrictInput;
}());
__decorate([
    core_1.Input('restrict_input'),
    __metadata("design:type", String)
], RestrictInput.prototype, "regExType", void 0);
__decorate([
    core_1.HostListener('keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RestrictInput.prototype, "keypress", null);
__decorate([
    core_1.HostListener('paste', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RestrictInput.prototype, "paste", null);
RestrictInput = __decorate([
    core_1.Directive({
        selector: '[restrict_input]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        index_2.ToastrService,
        index_2.ValidationService])
], RestrictInput);
exports.RestrictInput = RestrictInput;
//# sourceMappingURL=restrict-input.directive.js.map