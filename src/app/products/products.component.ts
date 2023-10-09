import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/products.service';
import { Product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{
  allProduct:Product[]=[]
  searchTerm:string=''
  
  constructor(private _productsService:ProductsService){
  
  }
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.allProduct=res.data
      }
    })
  }
  }

