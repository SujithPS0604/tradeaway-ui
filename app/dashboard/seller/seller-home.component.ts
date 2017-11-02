import { Component, OnInit} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {UserService} from '../service/user.service';


@Component({
    selector: 'seller-home-cmp',
    moduleId: module.id,
    templateUrl: 'seller-home.component.html'
})

export class SellerHomeComponent implements OnInit{
    user = {'userName' : '', 'password' : ''};
    id="";

	  constructor(private userService : UserService ,
   		private router: Router,
   		private route: ActivatedRoute) {
  	}

  	logout(){

      this.userService.logout(this.user.userName,this.user.password)
      	.subscribe(
      	    data => {
				        this.router.navigate(['signin']);
      	    },
      	    error=> {
      	        console.error( error ) ;
  				      this.router.navigate(['signin']);
      	    }
      	);

  	}


    ngOnInit(){
      this.route.queryParams.subscribe( (params )=> {
	      var id = params['id'];
	      var type = params['type'];

	      if(!id || !type){
	         this.router.navigate(['signin'],{ queryParams:  { 'error-message' : 'invalid user' } });
           return;
	      }

        this.id=id;

	      this.userService.getUser(type,id)
	        .subscribe(
	          user => {
	             this.user = user;
	          },
	          error => {
	              //invalid user
	              this.router.navigate(['signin']);
	          });
	    });
       
    }
}