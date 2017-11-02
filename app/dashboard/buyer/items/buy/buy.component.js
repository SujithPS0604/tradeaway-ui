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
var router_1 = require("@angular/router");
var seller_service_1 = require("../../../service/seller.service");
var BuyItemComponent = (function () {
    function BuyItemComponent(sellerService, router, route) {
        this.sellerService = sellerService;
        this.router = router;
        this.route = route;
        this.items = [
            { name: 'ITEM1', category: 'CATEGORY1', id: '1', imgUrl: 'https://kbob.github.io/images/sample-3.jpg', shortDesc: 'This item is a very good one having two legs and one eye' },
            { name: 'ITEM2', category: 'CATEGORY2', id: '2', imgUrl: 'https://kbob.github.io/images/sample-3.jpg', shortDesc: 'This item is a very good one having two legs and two eyes' }
        ];
        this.buyerId = 0;
        this.message = "";
    }
    BuyItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        //init
        this.route.queryParams.subscribe(function (params) {
            _this.buyerId = params['id'];
        });
        this.sellerService.getItems()
            .subscribe(function (items) {
            _this.items = items.content;
        }, function (error) {
            console.error(error);
        });
    };
    BuyItemComponent.prototype.buy = function (name) {
        this.message = "Bought Item : " + name;
    };
    return BuyItemComponent;
}());
BuyItemComponent = __decorate([
    core_1.Component({
        selector: 'buy-item-cmp',
        moduleId: module.id,
        templateUrl: 'buy.component.html'
    }),
    __metadata("design:paramtypes", [seller_service_1.SellerService,
        router_1.Router,
        router_1.ActivatedRoute])
], BuyItemComponent);
exports.BuyItemComponent = BuyItemComponent;
//# sourceMappingURL=buy.component.js.map