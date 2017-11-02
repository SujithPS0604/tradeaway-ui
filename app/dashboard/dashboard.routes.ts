import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component'; 
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './signin/signin.component';
import { SellerHomeComponent } from './seller/seller-home.component';
import { BuyerHomeComponent } from './buyer/buyer-home.component';
import { AddItemComponent } from './seller/items/add/add.component';
import { BuyItemComponent } from './buyer/items/buy/buy.component';
import { ViewItemComponent } from './seller/items/view/view.component';
import { OrdersComponent } from './seller/items/orders/orders.component';
import { HomepageComponent} from './homepage/homepage.component'

export const MODULE_ROUTES: Route[] =[
    { path: 'notfound', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'seller-home', component: SellerHomeComponent },
    { path: 'buyer-home', component: BuyerHomeComponent },
    { path: 'add-item', component: AddItemComponent },
    { path: 'view-item', component: ViewItemComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'buy-item', component: BuyItemComponent },


    { path: '', redirectTo: 'signin', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    SellerHomeComponent,
    BuyerHomeComponent,
    AddItemComponent,
    ViewItemComponent,
    OrdersComponent,
    BuyItemComponent,
    HomepageComponent
]
