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
var index_1 = require("./index");
var configuration_settings_1 = require("../infrastructure/configuration-settings");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ToastrComponent = (function () {
    function ToastrComponent(router, _logger, _globalToastrService, _toastrMgr, _vRef) {
        this.router = router;
        this._logger = _logger;
        this._globalToastrService = _globalToastrService;
        this._toastrMgr = _toastrMgr;
        this._vRef = _vRef;
        //breaking change : https://github.com/PointInside/ng2-toastr#breaking-change-solution-for-angular-v22x
        this._toastrMgr.setRootViewContainerRef(_vRef);
        this._logger.info("GlobalToastrComponent : ngOnInit");
        _globalToastrService.showToastrError = this.showToastrError.bind(this);
        _globalToastrService.showToastrSuccess = this.showToastrSuccess.bind(this);
        _globalToastrService.showToastrWarning = this.showToastrWarning.bind(this);
        _globalToastrService.showToastrInformation = this.showToastrInformation.bind(this);
        _globalToastrService.showToastrCustom = this.showCustomToastr.bind(this);
    }
    ToastrComponent.prototype.showToastrError = function (errorMessage) {
        this._logger.info("ToastrComponent : showToastrError");
        this._toastrMgr.error(errorMessage);
    };
    ToastrComponent.prototype.showToastrSuccess = function (successMessage) {
        this._logger.info("ToastrComponent : showToastrSuccess");
        this._toastrMgr.success(successMessage, "", configuration_settings_1.AutoCloseToastrOptions);
    };
    ToastrComponent.prototype.showToastrWarning = function (warningMessage) {
        var _this = this;
        this._logger.info("ToastrComponent : showToastrWarning");
        this._toastrMgr.warning(warningMessage, null, configuration_settings_1.SystemMessageToastrOptions);
        this._toastrMgr.onClickToast()
            .subscribe(function (toast) {
            _this._toastrMgr.clearToast(toast);
        });
    };
    ToastrComponent.prototype.showToastrInformation = function (informationMessage) {
        this._logger.info("ToastrComponent : showToastrInformation");
        this._toastrMgr.info(informationMessage, "", configuration_settings_1.AutoCloseToastrOptions);
    };
    ToastrComponent.prototype.showCustomToastr = function (informationMessage) {
        this._logger.info("ToastrComponent : showCustomToastr");
        this._toastrMgr.custom(informationMessage, null, configuration_settings_1.CustomToastrOptions);
    };
    return ToastrComponent;
}());
ToastrComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toastr',
        template: '<div></div>'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        core_2.Logger,
        index_1.ToastrService,
        ng2_toastr_1.ToastsManager,
        core_1.ViewContainerRef])
], ToastrComponent);
exports.ToastrComponent = ToastrComponent;
//# sourceMappingURL=toastr.component.js.map