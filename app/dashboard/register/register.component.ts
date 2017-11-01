import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
    selector: 'register-cmp',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit{
   
  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    address: new FormControl(),
    mobile: new FormControl(),
    type: new FormControl(),
    gender: new FormControl(),
    dob: new FormControl(),
    pan: new FormControl(),
    experience: new FormControl(),
  });

  type="BUYER";
  gender="MALE";


  public types = [
    { value: 'SELLER', display: 'Seller' },
    { value: 'BUYER', display: 'Buyer' }
  ];

  public genders = [
    { value: 'MALE', display: 'Male' },
    { value: 'FEMALE', display: 'Female' }
  ];

  constructor(private userService: UserService,
   private router: Router) {
  }

    ngOnInit(){
        
    }

    register() {
        this.userService.registerUser(this.form.value)
        .subscribe(
          user => {
            console.log(user);

            this.router.navigate(['signin']);

          },
          error => {
              this.router.navigate(['notfound']);
        });
    }
}
