import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
    selector: 'signin-cmp',
    moduleId: module.id,
    templateUrl: 'signin.component.html'
})

export class SignInComponent implements OnInit{

  form = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    type: new FormControl()
  });

  type="BUYER";

  signinMessage="";

   public types = [
    { value: 'SELLER', display: 'Seller' },
    { value: 'BUYER', display: 'Buyer' }
  ];

  ngOnInit(){
     this.route.queryParams.subscribe( (params )=> {
        var id = params['error-message'];

        if(!id){
          return ;
        }

        this.signinMessage="Wrong user " ;
      });
  }


  constructor(private userService: UserService,
   private router: Router,private route: ActivatedRoute) {
  }

  signin() {
    
       let userType=this.form.value.type;
		   this.userService.verifyUser(this.form.value)
        .subscribe(
          data => { 

            this.router.navigate([userType.toLowerCase()+'-home'], { queryParams: { id: data.content[0].id , type: userType }});

          },
          error => {
             this.signinMessage="Wrong credentials!!! ";

             console.error(error);
        });
              
  }
}