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
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  constructor(private userService: UserService,
   private router: Router) {
  }

    ngOnInit(){
       //init
    }

    register() {
     this.userService.verifyUser(this.form.value)
    }
}
}
