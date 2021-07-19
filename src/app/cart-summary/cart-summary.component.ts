import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  @Input() subTotal: number;
  @Input() discount: number;

  tax: number = 0.1;

  constructor() {
    this.subTotal = 10;
    this.discount = 0
  }

  ngOnInit(): void {}
}
