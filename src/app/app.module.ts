import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FilterProductsPipe } from './filter-products.pipe';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductsComponent,
    SignInComponent,
    SignUpComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SearchPipe,
    FilterProductsPipe,
    MainSliderComponent,
    CheckoutComponent,
    WishlistComponent,
    ForgetPasswordComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     CarouselModule,
     FormsModule,
     ToastrModule.forRoot(),
     CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
