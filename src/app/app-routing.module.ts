import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AutherClassGuard } from './auther-class.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home", canActivate:[AutherClassGuard],component:HomeComponent},
  {path:"about" , canActivate:[AutherClassGuard],component:AboutComponent},
  {path:"cart" , canActivate:[AutherClassGuard],component:CartComponent},
  {path:"wishlist" , canActivate:[AutherClassGuard],component:WishlistComponent},
  {path:"checkout" , canActivate:[AutherClassGuard],component:CheckoutComponent},
  {path:"products" , canActivate:[AutherClassGuard],component:ProductsComponent},
  {path:"brands" , canActivate:[AutherClassGuard],component:BrandComponent},
  {path:"categories", canActivate:[AutherClassGuard],component:CategoriesComponent},
  {path:"productDetails/:id", canActivate:[AutherClassGuard],component:ProductDetailsComponent},
 
  {path:"signup",component:SignUpComponent},
  {path:"login",component:SignInComponent},
  {path:"forgetpassword",component:ForgetPasswordComponent},


  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
