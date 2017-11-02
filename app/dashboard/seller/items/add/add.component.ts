import { Component, OnInit} from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import {SellerService} from '../../../service/seller.service';


@Component({
    selector: 'add-item-cmp',
    moduleId: module.id,
    templateUrl: 'add.component.html'
})


export class AddItemComponent implements OnInit{
	private url: string = "http://localhost:8080/";

	form = new FormGroup({
	    id: new FormControl(),
	    category: new FormControl(),
	    imgUrl: new FormControl(),
	    shortDesc: new FormControl(),
	    quantity: new FormControl(),
	    price: new FormControl()
	  });

	 public items = [
	    { name: 'ITEM1', category: 'CATEGORY1' , id : '1' , imgUrl : "" },
	    { name: 'ITEM2', category: 'CATEGORY2' , id : '2' , imgUrl : "" }
	  ];

	  public categories = [ 'ELECTRONICS' , 'BOOKS' ];

	  category=this.categories[0];
	  id="";
	  item= this.items[0];
	  itemId=this.items[0].id;

	constructor(private sellerService : SellerService ,
   		private router: Router,
   		private route: ActivatedRoute) {
  	}

    ngOnInit(){
       //init

      this.route.queryParams.subscribe( (params )=> {
	      var id = params['id'];
	      this.id=id;
	  });

      this.sellerService.getItems()
      	   .subscribe(
      	   		items => {
      	   			this.items=items.content;
      	   			this.item=this.items[0]; 
      	   			this.itemId=this.item.id;
      	   			this.category=this.item.category || this.categories[0];
      	   		},
      	   		error =>{
      	   			console.error(error);
      	   		}
      );


    }

    changeItem(itemId){
    	this.item=this.items.filter(item => item.id==itemId)[0];
    	this.category=this.item.category;
    }

    addItem(){

    	let item={
    		"sellerId" 	: 	this.id,
    		"itemId" 	:   this.item.id,
    		"quantity" 	: 	this.form.value.quantity,
    		"price" 	: 	this.form.value.price
    	}


     	this.sellerService.addItem(this.id,item)
        	.subscribe(
	          user => {
	            console.log(user);

	            this.router.navigate(['view-item'],{ queryParams:  { 'id' : this.id } } );

	          },
	          error => {
	          	console.log(error);
	    });



    }
}
