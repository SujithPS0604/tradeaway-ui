import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component'; 
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './signin/signin.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'notfound', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'signin', component: SignInComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    SignInComponent,
    RegisterComponent
]
