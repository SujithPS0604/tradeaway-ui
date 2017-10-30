import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'signin-cmp',
    moduleId: module.id,
    templateUrl: 'signin.component.html'
})

export class SignInComponent implements OnInit{

	form: FormGroup;


  constructor( formBuilder: FormBuilder ) {
   	 this.form = formBuilder.group({
    	});
   }

   
    ngOnInit(){
       //init
    }

    save() {
       console.log('hello')
    }
}