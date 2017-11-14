"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_module_1 = require("../core-module/core.module");
var global_module_1 = require("./global-module/global.module");
var shared_module_1 = require("./shared-module/shared.module");
var app_routing_1 = require("./app.routing");
var shop_module_1 = require("./shop-module/shop.module");
var order_module_1 = require("./order-module/order.module");
// app imports
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var home_service_1 = require("./home/home.service");
var environment_1 = require("./environment");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            core_module_1.CoreModule.forRoot({ environmentName: environment_1.Environment.environmentName, apiTokenUrl: '', appUrl: environment_1.Environment.appUrl }),
            global_module_1.GlobalModule.forRoot(),
            shared_module_1.SharedModule,
            app_routing_1.routing,
            shop_module_1.ShopModule,
            order_module_1.OrderModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            home_service_1.HomeService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map