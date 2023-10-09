import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/products.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

allCategory:Category[]=[]
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 8
    }
  },
  nav: true
}


constructor(private _productService:ProductsService){

}
ngOnInit(): void {
  this.getCateg()
}


getCateg(){
  this._productService.getCategory().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.allCategory=res.data
      
    }
  })
}
}
