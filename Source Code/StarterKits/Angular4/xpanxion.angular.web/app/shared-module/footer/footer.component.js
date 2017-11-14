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
var index_1 = require("../../global-module/index");
var index_2 = require("../../../core-module/index");
var footer_service_1 = require("./footer.service");
var FooterComponent = (function () {
    function FooterComponent(_logger, _utilityService, _changeRef, _footerService, _sharedDataService) {
        this._logger = _logger;
        this._utilityService = _utilityService;
        this._changeRef = _changeRef;
        this._footerService = _footerService;
        this._sharedDataService = _sharedDataService;
        this.model = "";
        this._logger.info("FooterComponent : constructor ");
    }
    FooterComponent.prototype.ngOnInit = function () {
        this._logger.info("FooterComponent : ngOnInit");
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'footer',
        templateUrl: 'footer.component.html',
        providers: [footer_service_1.FooterService]
    }),
    __metadata("design:paramtypes", [core_2.Logger,
        index_2.UtilityService,
        core_1.ChangeDetectorRef,
        footer_service_1.FooterService,
        index_1.SharedDataService])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map