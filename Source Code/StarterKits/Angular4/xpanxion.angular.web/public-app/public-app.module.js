"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
var core_module_1 = require("../core-module/core.module");
var public_app_routing_1 = require("./public-app.routing");
var public_app_component_1 = require("./public-app.component");
var environment_1 = require("./environment");
var index_1 = require("./shared/index");
var index_2 = require("./public/index");
var index_3 = require("./login/index");
function translateLoaderFactory(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, '/assets/resources', '.json?v=' + resourcesVersion);
}
exports.translateLoaderFactory = translateLoaderFactory;
var PublicAppModule = (function () {
    function PublicAppModule() {
    }
    return PublicAppModule;
}());
PublicAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: translateLoaderFactory,
                deps: [http_1.Http]
            }),
            core_module_1.CoreModule.forRoot({ environmentName: environment_1.Environment.environmentName, apiTokenUrl: '', appUrl: environment_1.Environment.appUrl }),
            public_app_routing_1.routing
        ],
        declarations: [
            public_app_component_1.PublicAppComponent,
            index_2.PublicComponent,
            index_3.LoginComponent
        ],
        bootstrap: [
            public_app_component_1.PublicAppComponent
        ],
        providers: [
            index_1.NotificationService,
            index_1.AuthGuardService
        ]
    })
], PublicAppModule);
exports.PublicAppModule = PublicAppModule;
//# sourceMappingURL=public-app.module.js.map