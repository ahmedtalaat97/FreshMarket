import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

isLoggedIn:boolean=false

cartNum:number=0

constructor(private _authService:AuthService , private _cartService:CartService){

_cartService.numOfCartItems.subscribe({
  next:(res)=>{
this.cartNum=res
  },
  error:()=>{}
})
this._authService.userData.subscribe(()=>{
  if(this._authService.userData.getValue()){
    this.isLoggedIn=true
  }else{
    this.isLoggedIn=false
  }
})

}
logout(){
  this._authService.logout()
}
}
