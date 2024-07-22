import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html' 
})
export class ProductsBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  constructor() { }

  ngOnInit(): void {
  }

}
