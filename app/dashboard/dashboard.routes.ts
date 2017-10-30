import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component'; 
import { BuyerRegisterComponent } from './users/buyer/register/register.component';
import { SellerRegisterComponent } from './users/seller/register/register.component';
import { SignInComponent } from './signin/signin.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'buyer-register', component: BuyerRegisterComponent },
    { path: 'seller-register', component: SellerRegisterComponent },
    { path: 'signin', component: SignInComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    SignInComponent,
    BuyerRegisterComponent,
    SellerRegisterComponent
]
