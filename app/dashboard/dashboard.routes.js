"use strict";
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./users/buyer/register/register.component");
var register_component_2 = require("./users/seller/register/register.component");
var signin_component_1 = require("./signin/signin.component");
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'buyer-register', component: register_component_1.BuyerRegisterComponent },
    { path: 'seller-register', component: register_component_2.SellerRegisterComponent },
    { path: 'signin', component: signin_component_1.SignInComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    signin_component_1.SignInComponent,
    register_component_1.BuyerRegisterComponent,
    register_component_2.SellerRegisterComponent
];
//# sourceMappingURL=dashboard.routes.js.map