import { Component, OnInit} from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'add-item-cmp',
    moduleId: module.id,
    templateUrl: 'add.component.html'
})


export class AddItemComponent implements OnInit{
	form = new FormGroup({
	    item: new FormControl(),
	    category: new FormControl(),
	    image: new FormControl(),
	    description: new FormControl(),
	    quantity: new FormControl(),
	    price: new FormControl()
	  });

	 public items = [
	    { name: 'ITEM1', category: 'CATEGORY1' },
	    { name: 'ITEM2', category: 'CATEGORY2' }
	  ];

	  public categories = [
	    { name: 'CATEGORY1' },
	    { name: 'CATEGORY2' }
	  ];


    ngOnInit(){
       //init
    }
}
