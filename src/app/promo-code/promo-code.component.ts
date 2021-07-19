import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {
  @Output() onPromoCodeInput = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  promoCodeInput(input:any) {
    this.onPromoCodeInput.emit(input.value)
  }
}
