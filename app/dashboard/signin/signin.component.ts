import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../user/user';
import {UserService} from '../service/user.service';

@Component({
    selector: 'signin-cmp',
    moduleId: module.id,
    templateUrl: 'signin.component.html'
})

export class SignInComponent implements OnInit{

  form = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });

  signinMessage="";

  constructor(private userService: UserService,
   private router: Router) {
  }

    ngOnInit(){
       //init
    }

    signin() {
		this.signinMessage="";

       var res=this.userService.verifyUser(this.form.value);

       if(res && res.type){
       		this.router.navigate(['register']);
       }else {
          this.signinMessage="Wrong Credentials";
       }
              
    }
}