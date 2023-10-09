import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/core/services/cart.service';
import { WishlistService } from 'src/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

wishList:any=[]


constructor(private _wishList:WishlistService ,private _router:Router , private _cartService:CartService ,private _toastr:ToastrService){}


ngOnInit(): void {
  this._wishList.getLoggedWishList().subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.wishList=res.data
    
    },
    error:(err)=>{}
  })
}

removeItem(productId:string){
  this._wishList.removeWishedItem(productId).subscribe({
    next:(res:any)=>{
      console.log(res.data)
      this._wishList.getLoggedWishList().subscribe({
        next:(res:any)=>{this.wishList=res.data}
      })
      this._toastr.error('item has been removed','remove',{
      
        timeOut:2000
        
      })
      
    },
    error:(err)=>{}
  })
  
}
addToCart(id:string){
  this._cartService.addToCart(id).subscribe({
    next:(res)=>{
       this._cartService.numOfCartItems.next(res.numOfCartItems)
       this._toastr.success('item has been added','sucess',{
      
        timeOut:1000
        
      })
      console.log(res)},
    error:(err)=>console.log(err)
    
    
  }) 

}
}
