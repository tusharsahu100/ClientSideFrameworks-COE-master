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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./services/index");
var index_2 = require("./focus-manager/index");
function sharedDataServiceFactory(service) {
    return function () { return service.populateCommonData(); };
}
exports.sharedDataServiceFactory = sharedDataServiceFactory;
var GlobalModule = GlobalModule_1 = (function () {
    //Prevent global module to be injected multiple times
    function GlobalModule(parentModule) {
        if (parentModule) {
            throw new Error('GlobalModule is already loaded. Import it in the AppModule only');
        }
    }
    GlobalModule.forRoot = function () {
        return {
            ngModule: GlobalModule_1,
            providers: []
        };
    };
    return GlobalModule;
}());
GlobalModule = GlobalModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            index_2.FocusManager
        ],
        providers: [
            index_1.AuthGuardService,
            index_1.SharedDataService,
            index_1.NotificationService,
            index_2.FocusManagerHelperService,
            {
                provide: core_1.APP_INITIALIZER,
                useFactory: sharedDataServiceFactory,
                deps: [index_1.SharedDataService],
                multi: true
            }
        ],
        exports: [
            index_2.FocusManager
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [GlobalModule])
], GlobalModule);
exports.GlobalModule = GlobalModule;
var GlobalModule_1;
//# sourceMappingURL=global.module.js.map