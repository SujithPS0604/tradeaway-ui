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
var user_service_1 = require("../../../service/user.service");
var BuyerRegisterComponent = (function () {
    function BuyerRegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            userName: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            confirmPassword: new forms_1.FormControl(),
            address: new forms_1.FormControl(),
            mobile: new forms_1.FormControl(),
            type: new forms_1.FormControl(),
            gender: new forms_1.FormControl(),
            dob: new forms_1.FormControl(),
        });
    }
    BuyerRegisterComponent.prototype.ngOnInit = function () {
        //init
        this.form.controls['type'].setValue('buyer');
        this.form.controls['gender'].setValue('MALE');
    };
    BuyerRegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.registerUser(this.form.value)
            .subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['signin']);
        }, function (response) {
            if (response.status == 404) {
                _this.router.navigate(['NotFound']);
            }
        });
    };
    return BuyerRegisterComponent;
}());
BuyerRegisterComponent = __decorate([
    core_1.Component({
        selector: 'register-cmp',
        moduleId: module.id,
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], BuyerRegisterComponent);
exports.BuyerRegisterComponent = BuyerRegisterComponent;
//# sourceMappingURL=register.component.js.map