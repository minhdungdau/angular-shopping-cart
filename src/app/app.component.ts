import { PRODUCTS, PROMOCODE } from './mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-shopping-cart';
  products = PRODUCTS;
  promoCodeList = PROMOCODE;
  discount:number = 0
  numberItems: number = 0
  subTotal: number = 0

  ngOnInit() {
    this.updateList()
  }

  removeProducts(id: any) {
    //Xóa sản phẩm
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    this.updateList();
  }

  updateQuantity(input: any) {
    this.products.map((product) => {
      if (product.id === input.productID) {
        product.quantity = input.productQuantity;
      }
      return product;
    });
    this.updateList();
  }

  updateList() {
    //Tính lại tổng tiền
    this.subTotal = this.products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    //Tính lại số sản phẩm
    this.numberItems = this.products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
  }
  promoCodeInputCheck(code:any) {
    for (const promoCode of this.promoCodeList) {
      if (promoCode.code === code) {
        this.discount = promoCode.discountPercent
        return
      }
    }
    return alert('Wrong code')
  }
}
