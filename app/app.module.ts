import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
