"use strict";
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var signin_component_1 = require("./signin/signin.component");
var seller_home_component_1 = require("./seller/seller-home.component");
var add_component_1 = require("./seller/items/add/add.component");
var view_component_1 = require("./seller/items/view/view.component");
var orders_component_1 = require("./seller/items/orders/orders.component");
exports.MODULE_ROUTES = [
    { path: 'notfound', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'signin', component: signin_component_1.SignInComponent },
    { path: 'seller-home', component: seller_home_component_1.SellerHomeComponent },
    { path: 'add-item', component: add_component_1.AddItemComponent },
    { path: 'view-item', component: view_component_1.ViewItemComponent },
    { path: 'orders', component: orders_component_1.OrdersComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    signin_component_1.SignInComponent,
    register_component_1.RegisterComponent,
    seller_home_component_1.SellerHomeComponent,
    add_component_1.AddItemComponent,
    view_component_1.ViewItemComponent,
    orders_component_1.OrdersComponent
];
//# sourceMappingURL=dashboard.routes.js.map