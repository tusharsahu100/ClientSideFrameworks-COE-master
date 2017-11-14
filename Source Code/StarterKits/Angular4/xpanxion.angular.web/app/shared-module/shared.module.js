"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// plugins
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var ng2_select_1 = require("ng2-select");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_translate_1 = require("ng2-translate");
var mydatepicker_1 = require("mydatepicker");
var index_1 = require("./directive/index");
var index_2 = require("./header/index");
var footer_component_1 = require("./footer/footer.component");
var spinner_component_1 = require("./spinner/spinner.component");
var navigation_component_1 = require("./navigation/navigation.component");
var index_3 = require("./pipes/index");
function translateLoaderFactory(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, '/assets/resources', '.json?v=' + resourcesVersion);
}
exports.translateLoaderFactory = translateLoaderFactory;
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            ng2_bs3_modal_1.Ng2Bs3ModalModule,
            ng2_select_1.SelectModule,
            ng_bootstrap_1.NgbCarouselModule,
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: translateLoaderFactory,
                deps: [http_1.Http]
            }),
            mydatepicker_1.MyDatePickerModule
        ],
        declarations: [
            // pipes
            index_3.DatexPipe,
            index_3.EllipsisPipe,
            index_3.SafeHtmlPipe,
            index_3.SplitPipe,
            // directives
            index_1.RestrictInput,
            index_1.DisableControls,
            // components
            navigation_component_1.NavigationComponent,
            spinner_component_1.SpinnerComponent,
            index_2.HeaderComponent,
            index_2.LogoutConfirmationComponent,
            footer_component_1.FooterComponent
        ],
        providers: [],
        exports: [
            // Angular modules
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            // plugins
            ng2_bs3_modal_1.Ng2Bs3ModalModule,
            ng2_select_1.SelectModule,
            ng_bootstrap_1.NgbCarouselModule,
            ng2_translate_1.TranslateModule,
            mydatepicker_1.MyDatePickerModule,
            // pipes
            index_3.DatexPipe,
            index_3.EllipsisPipe,
            index_3.SafeHtmlPipe,
            index_3.SplitPipe,
            // directives
            index_1.RestrictInput,
            index_1.DisableControls,
            // shared components
            navigation_component_1.NavigationComponent,
            spinner_component_1.SpinnerComponent,
            index_2.HeaderComponent,
            index_2.LogoutConfirmationComponent,
            footer_component_1.FooterComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map