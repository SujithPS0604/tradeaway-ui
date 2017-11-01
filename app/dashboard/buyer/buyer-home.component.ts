import { Component, OnInit} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {UserService} from '../service/user.service';


@Component({
    selector: 'buyer-home-cmp',
    moduleId: module.id,
    templateUrl: 'buyer-home.component.html'
})

export class BuyerHomeComponent implements OnInit{
    user = {};


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

      this.route.queryParams.subscribe( (params : Params )=> {
	      var id = params['id'];
	      var type = params['type'];

	      if(!id){
	       return
	      }

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