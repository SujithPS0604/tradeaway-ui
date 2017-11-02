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
var seller_service_1 = require("../../../service/seller.service");
var AddItemComponent = (function () {
    function AddItemComponent(sellerService, router, route) {
        this.sellerService = sellerService;
        this.router = router;
        this.route = route;
        this.url = "http://localhost:8080/";
        this.form = new forms_1.FormGroup({
            id: new forms_1.FormControl(),
            category: new forms_1.FormControl(),
            imgUrl: new forms_1.FormControl(),
            shortDesc: new forms_1.FormControl(),
            quantity: new forms_1.FormControl(),
            price: new forms_1.FormControl()
        });
        this.items = [
            { name: 'ITEM1', category: 'CATEGORY1', id: '1', imgUrl: "" },
            { name: 'ITEM2', category: 'CATEGORY2', id: '2', imgUrl: "" }
        ];
        this.categories = ['ELECTRONICS', 'BOOKS'];
        this.category = this.categories[0];
        this.id = "";
        this.item = this.items[0];
        this.itemId = this.items[0].id;
    }
    AddItemComponent.prototype.ngOnInit = function () {
        //init
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
        });
        this.sellerService.getItems()
            .subscribe(function (items) {
            _this.items = items.content;
            _this.item = _this.items[0];
            _this.itemId = _this.item.id;
            _this.category = _this.item.category || _this.categories[0];
        }, function (error) {
            console.error(error);
        });
    };
    AddItemComponent.prototype.changeItem = function (itemId) {
        this.item = this.items.filter(function (item) { return item.id == itemId; })[0];
        this.category = this.item.category;
    };
    AddItemComponent.prototype.addItem = function () {
        var _this = this;
        var item = {
            "sellerId": this.id,
            "itemId": this.item.id,
            "quantity": this.form.value.quantity,
            "price": this.form.value.price
        };
        this.sellerService.addItem(this.id, item)
            .subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['view-item'], { queryParams: { 'id': _this.id } });
        }, function (error) {
            console.log(error);
        });
    };
    return AddItemComponent;
}());
AddItemComponent = __decorate([
    core_1.Component({
        selector: 'add-item-cmp',
        moduleId: module.id,
        templateUrl: 'add.component.html'
    }),
    __metadata("design:paramtypes", [seller_service_1.SellerService,
        router_1.Router,
        router_1.ActivatedRoute])
], AddItemComponent);
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=add.component.js.map