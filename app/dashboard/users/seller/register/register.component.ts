import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
    selector: 'register-cmp',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class SellerRegisterComponent implements OnInit{
   
  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    address: new FormControl(),
    mobile: new FormControl(),
    type: new FormControl(),
    pan: new FormControl(),
    experience: new FormControl(),
  });

  constructor(private userService: UserService,
   private router: Router) {
  }

    ngOnInit(){
       //init

       this.form.controls['type'].setValue('seller'); 
    }

    register() {
     this.userService.verifyUser(this.form.value)
    }
}
}
