import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {CommonModule} from '@angular/common';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


@NgModule({
    imports: [
	    CommonModule,
	    FormsModule,
	    ReactiveFormsModule,
	    RouterModule,
	    HttpModule,
	    RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
