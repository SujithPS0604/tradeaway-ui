import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'orders-cmp',
    moduleId: module.id,
    templateUrl: 'orders.component.html'
})

export class OrdersComponent implements OnInit{
	
    id="";
	public items = [
	    { name: 'ITEM1', category: 'CATEGORY1' , id : '1' , imgUrl : 'https://kbob.github.io/images/sample-3.jpg' , shortDesc : 'This item is a very good one having two legs and one eye' },
	    { name: 'ITEM2', category: 'CATEGORY2' , id : '2' , imgUrl : 'https://kbob.github.io/images/sample-3.jpg' , shortDesc : 'This item is a very good one having two legs and two eyes' }
	];

    constructor(private route : ActivatedRoute){

    }

    ngOnInit(){
       //init
       this.route.queryParams.subscribe( (params )=> {
          var id = params['id'];
          this.id=id;
      });
    }
}
