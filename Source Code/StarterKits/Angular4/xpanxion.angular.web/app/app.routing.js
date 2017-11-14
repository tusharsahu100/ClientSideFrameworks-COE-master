"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("../core-module/index");
var index_2 = require("./global-module/index");
var index_3 = require("./shared-module/index");
var product_component_1 = require("app/shop-module/product/product.component");
var offer_component_1 = require("app/shop-module/offer/offer.component");
var invoice_component_1 = require("app/order-module/invoice/invoice.component");
var order_component_1 = require("app/order-module/order/order.component");
var appRoutes = [
    {
        path: index_3.Constants.uiRoutes.login,
        redirectTo: index_3.Constants.uiRoutes.product,
        pathMatch: 'full'
    },
    {
        path: index_3.Constants.uiRoutes.empty,
        redirectTo: index_3.Constants.uiRoutes.product,
        pathMatch: 'full'
    },
    {
        path: index_3.Constants.uiRoutes.product,
        component: product_component_1.ProductComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: index_3.Constants.uiRoutes.offer,
        component: offer_component_1.OfferComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: index_3.Constants.uiRoutes.order,
        component: order_component_1.OrderComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: index_3.Constants.uiRoutes.invoice,
        component: invoice_component_1.InvoiceComponent,
        canActivate: [index_2.AuthGuardService]
    },
    {
        path: '**',
        component: index_1.PageNotFoundComponent,
        canActivate: [index_2.AuthGuardService]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map