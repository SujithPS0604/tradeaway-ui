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
var OrdersComponent = (function () {
    function OrdersComponent(route) {
        this.route = route;
        this.id = "";
        this.type = "";
        this.items = [
            { name: 'ITEM1', category: 'CATEGORY1', id: '1', imgUrl: 'https://kbob.github.io/images/sample-3.jpg', shortDesc: 'This item is a very good one having two legs and one eye' },
            { name: 'ITEM2', category: 'CATEGORY2', id: '2', imgUrl: 'https://kbob.github.io/images/sample-3.jpg', shortDesc: 'This item is a very good one having two legs and two eyes' }
        ];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //init
        this.route.queryParams.subscribe(function (params) {
            var id = params['id'];
            _this.type = params['type'];
            _this.id = id;
        });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    core_1.Component({
        selector: 'orders-cmp',
        moduleId: module.id,
        templateUrl: 'orders.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map