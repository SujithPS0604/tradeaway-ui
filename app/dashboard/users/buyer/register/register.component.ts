import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
    selector: 'register-cmp',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class BuyerRegisterComponent implements OnInit{
   
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
  });

  constructor(private userService: UserService,
   private router: Router) {
  }

    ngOnInit(){
       //init

       this.form.controls['type'].setValue('buyer');
       this.form.controls['gender'].setValue('MALE');
    }

    register() {
        this.userService.registerUser(this.form.value)
        .subscribe(
          user => {
            console.log(user);

            this.router.navigate(['signin']);


          },
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
        });
    }
}
}
