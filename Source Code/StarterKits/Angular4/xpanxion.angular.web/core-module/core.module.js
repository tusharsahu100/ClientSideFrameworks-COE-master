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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
var core_2 = require("angular2-logger/core");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var index_1 = require("./errorHandling/index");
var index_2 = require("./extensions/index");
var index_3 = require("./infrastructure/index");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var spinner_service_1 = require("./spinner/spinner.service");
var index_4 = require("./toastr/index");
function httpServiceFactory(backend, options, utilityService, authService) {
    return new index_2.HttpService(backend, options, utilityService, authService);
}
exports.httpServiceFactory = httpServiceFactory;
var CoreModule = CoreModule_1 = (function () {
    //Prevent core module to be injected multiple times
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule.forRoot = function (config) {
        return {
            ngModule: CoreModule_1,
            providers: [
                { provide: index_3.EnvironmentConfig, useValue: config }
            ]
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpModule,
            ng2_bs3_modal_1.Ng2Bs3ModalModule,
            ng2_toastr_1.ToastModule.forRoot(index_3.ToastrOptions)
        ],
        declarations: [
            index_1.GlobalErrorDialogComponent,
            index_4.ToastrComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        exports: [
            index_1.GlobalErrorDialogComponent,
            index_4.ToastrComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        providers: [
            {
                provide: core_2.Options,
                useValue: { level: core_2.Level.INFO }
            },
            core_2.Logger,
            index_3.UtilityService,
            index_4.ToastrMessageHelperService,
            index_4.ToastrService,
            index_3.ValidationService,
            index_2.AuthService,
            spinner_service_1.SpinnerService,
            index_1.GlobalErrorLoggingService,
            {
                provide: index_1.LoggingErrorHandlerOptions,
                useValue: {
                    isRethrowError: index_3.ConfigurationSettings.isRethrowErrorInsideGlobalErrorHandler,
                    isUnwrapError: index_3.ConfigurationSettings.isUnwrapErrorInsideGlobalErrorHandler,
                    isLogErrorToConsole: index_3.ConfigurationSettings.islogErrorToConsoleInsideGlobalErrorHandler,
                    isSendErrorToServer: index_3.ConfigurationSettings.isSendErrorToServerInsideGlobalErrorHandler,
                    isShowErrorDialog: index_3.ConfigurationSettings.isShowErrorDialogInsideGlobalErrorHandler
                }
            },
            {
                provide: core_1.ErrorHandler,
                useClass: index_1.GlobalErrorHandlerComponent
            },
            {
                provide: http_1.BrowserXhr,
                useClass: index_2.CustomBrowserXhr
            },
            {
                provide: index_2.HttpService,
                useFactory: httpServiceFactory,
                deps: [http_1.XHRBackend, http_1.RequestOptions, index_3.UtilityService, index_2.AuthService]
            }
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;
//# sourceMappingURL=core.module.js.map