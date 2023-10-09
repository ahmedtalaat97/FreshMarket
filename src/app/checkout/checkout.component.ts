import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/core/services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private _cartService:CartService ){}

  shippingAddress:FormGroup=new FormGroup({
     details:new FormControl(null),
     phone:new FormControl(null),
     city:new FormControl(null),
  })



  submit(shippingAddress:FormGroup){
    console.log(shippingAddress.value);
    this._cartService.onlinePayment(shippingAddress.value,this._cartService.cartId).subscribe({
      next:(res:any)=>{
        this.navigateToPage(res.session.url)
        console.log(res.session.url);
        
      },
      error:(err)=>{console.log(err);
      }
    })
    
  }


  navigateToPage(url:string){
    window.location.href=url
  }
}
