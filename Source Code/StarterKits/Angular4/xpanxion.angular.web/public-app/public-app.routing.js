"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var page_not_found_component_1 = require("../core-module/page-not-found/page-not-found.component");
var index_2 = require("./shared/index");
var appRoutes = [
    {
        path: index_2.Constants.uiRoutes.login,
        component: index_1.LoginComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: index_2.Constants.uiRoutes.empty,
        component: index_1.LoginComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent,
        canActivate: [index_2.AuthGuardService]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=public-app.routing.js.map