"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddItemComponent = (function () {
    function AddItemComponent() {
        this.form = new forms_1.FormGroup({
            item: new forms_1.FormControl(),
            category: new forms_1.FormControl(),
            image: new forms_1.FormControl(),
            description: new forms_1.FormControl(),
            quantity: new forms_1.FormControl(),
            price: new forms_1.FormControl()
        });
        this.items = [
            { name: 'ITEM1', category: 'CATEGORY1' },
            { name: 'ITEM2', category: 'CATEGORY2' }
        ];
        this.categories = [
            { name: 'CATEGORY1' },
            { name: 'CATEGORY2' }
        ];
    }
    AddItemComponent.prototype.ngOnInit = function () {
        //init
    };
    return AddItemComponent;
}());
AddItemComponent = __decorate([
    core_1.Component({
        selector: 'add-item-cmp',
        moduleId: module.id,
        templateUrl: 'add.component.html'
    })
], AddItemComponent);
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=add.component.js.map