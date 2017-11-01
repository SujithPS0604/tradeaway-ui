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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_service_1 = require("../service/user.service");
var SignInComponent = (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.form = new forms_1.FormGroup({
            userName: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            type: new forms_1.FormControl()
        });
        this.type = "BUYER";
        this.signinMessage = "";
        this.types = [
            { value: 'SELLER', display: 'Seller' },
            { value: 'BUYER', display: 'Buyer' }
        ];
    }
    SignInComponent.prototype.signin = function () {
        var _this = this;
        var userType = this.form.value.type;
        this.userService.verifyUser(this.form.value)
            .subscribe(function (data) {
            _this.router.navigate([userType.toLowerCase() + '-home'], { queryParams: { id: data.content[0].id, type: userType } });
        }, function (error) {
            _this.signinMessage = "Wrong credentials!!! ";
            console.error(error);
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    core_1.Component({
        selector: 'signin-cmp',
        moduleId: module.id,
        templateUrl: 'signin.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=signin.component.js.map