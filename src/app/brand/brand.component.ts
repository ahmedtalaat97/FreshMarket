import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  allBrands:any=null

  constructor(private _productsService:ProductsService){}

ngOnInit(): void {
 this.getBrands()
}
  

getBrands(){
  this._productsService.getBrands().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.allBrands=res.data
    },
    error:(res)=>{}
  })
}
}
