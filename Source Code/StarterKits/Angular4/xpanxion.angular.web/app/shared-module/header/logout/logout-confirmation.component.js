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
var LogoutConfirmationComponent = (function () {
    function LogoutConfirmationComponent(router, _logger) {
        this.router = router;
        this._logger = _logger;
        this.onLogoutConfirmation = new core_1.EventEmitter();
        this._logger.info("LogoutConfirmationComponent : ngOnInit ");
    }
    LogoutConfirmationComponent.prototype.showConfirmation = function () {
        this._logger.info("LogoutConfirmationComponent : showConfirmation ");
        this.modalComp.open();
    };
    LogoutConfirmationComponent.prototype.closeAndInstructLogoutToParent = function () {
        this._logger.info("LogoutConfirmationComponent : closeAndInstructLogoutToParent ");
        this.onLogoutConfirmation.emit(true);
    };
    LogoutConfirmationComponent.prototype.dismissModal = function () {
    };
    return LogoutConfirmationComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], LogoutConfirmationComponent.prototype, "modalComp", void 0);
__decorate([
    core_1.ViewChild('logoutContainer'),
    __metadata("design:type", core_1.ElementRef)
], LogoutConfirmationComponent.prototype, "container", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LogoutConfirmationComponent.prototype, "onLogoutConfirmation", void 0);
LogoutConfirmationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'logout-confirmation',
        templateUrl: 'logout-confirmation.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [router_1.Router,
        core_2.Logger])
], LogoutConfirmationComponent);
exports.LogoutConfirmationComponent = LogoutConfirmationComponent;
//# sourceMappingURL=logout-confirmation.component.js.map