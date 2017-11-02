import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {CommonModule} from '@angular/common';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {UserService} from './service/user.service';
import {SellerService} from './service/seller.service';
import { HomepageComponent} from './homepage/homepage.component'


@NgModule({
    imports: [
	    CommonModule,
	    FormsModule,
	    ReactiveFormsModule,
	    RouterModule,
	    HttpModule,
	    RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS, HomepageComponent ],
    providers: [ 
    			UserService,
    			SellerService 
    		   ]
})

export class DashboardModule{}
