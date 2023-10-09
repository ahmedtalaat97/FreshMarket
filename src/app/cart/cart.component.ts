import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _cartService:CartService , private _toastr:ToastrService , private _router:Router){}
  cartDetails:any=null

  

ngOnInit(): void {
  this._cartService.getLoggedUserCart().subscribe({
    next:(res)=>{console.log(res.data._id)
    this.cartDetails=res.data
    this._cartService.cartId=res.data._id
  

    },
    
    error:(err)=>console.log(err)
    
    
  })
}
removeCart(productId:string){
  this._cartService.removeCartItem(productId).subscribe({
    next:(res)=>{console.log(res.data)
    this.cartDetails=res.data
    this._toastr.success('item has been removed','sucess',{
      
      timeOut:2000
      
    })
    },
    error:(err)=>console.log(err),
    
  })

}
updateProductNum(productId:string ,count:number){

this._cartService.updateProductCount(productId,count).subscribe({
    next:(res)=>{console.log(res.data)
    this.cartDetails=res.data
    this._toastr.success('item has been updated','success',{
      
      timeOut:1000
      
    })
    },
    error:(err)=>console.log(err),
    
  })
}

}
