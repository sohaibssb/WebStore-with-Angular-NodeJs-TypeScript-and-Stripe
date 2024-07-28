import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html' 
})
export class ProductsBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'Shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150'
  };
  
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
