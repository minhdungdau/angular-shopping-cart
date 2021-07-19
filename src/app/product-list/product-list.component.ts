import { Product } from './../Product.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter()
  @Output() onUpdateQuantity = new EventEmitter()

  constructor() {
    this.products = []
  }

  ngOnInit(): void {}

  removeProduct(id: any): void {
    this.onRemoveProduct.emit(id)
  }

  updateQuantity(element: any, productQuantity:number, productID:any): void {
    if (element.value <= 0) {
      element.value = 1;
    } else if (element.value > 99) {
      element.value = 99;
    }
    productQuantity = Number(element.value)
    this.onUpdateQuantity.emit({productID, productQuantity})
  }
}
