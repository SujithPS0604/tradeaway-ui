import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'seller-home-cmp',
    moduleId: module.id,
    templateUrl: 'seller-home.component.html'
})

export class SellerHomeComponent implements OnInit{
    user = {};

    ngOnInit(){
       //init

       this.user={'name':'Seller'}
    }
}