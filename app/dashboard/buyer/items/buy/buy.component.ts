import { Component, OnInit} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {SellerService} from '../../../service/seller.service';

@Component({
    selector: 'buy-item-cmp',
    moduleId: module.id,
    templateUrl: 'buy.component.html'
})

export class BuyItemComponent implements OnInit{

  public items = [
      { name: 'ITEM1', category: 'CATEGORY1' , id : '1' , imgUrl : 'https://kbob.github.io/images/sample-3.jpg' , shortDesc : 'This item is a very good one having two legs and one eye' },
      { name: 'ITEM2', category: 'CATEGORY2' , id : '2' , imgUrl : 'https://kbob.github.io/images/sample-3.jpg' , shortDesc : 'This item is a very good one having two legs and two eyes' }
  ];

   buyerId=0;

   message="";

    constructor(private sellerService : SellerService ,
           private router: Router,
           private route: ActivatedRoute) {
     }

    ngOnInit(){
       //init
       this.route.queryParams.subscribe( (params )=> {
          this.buyerId = params['id'];
      });

      this.sellerService.getItems()
       .subscribe(
                     items => {
                         this.items=items.content;
                     },
                     error =>{
                         console.error(error);
                     }
      );
    }

    buy(name){
      this.message="Bought Item : " + name;
    }


}
