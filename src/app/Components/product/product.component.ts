import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  allProducts:any
  constructor( private productList:ProductService)
  {
    this.allProducts =this.productList.getAllProducts();

  }

}
