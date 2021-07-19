import { PromoCode } from './Promo-code.model';
import { Product } from './Product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'PRODUCT ITEM NUMBER 1',
    description: 'Description for product item number 1',
    thumbnail: 'https://via.placeholder.com/200x150',
    price: 50000,
    quantity: 2,
  },
  {
    id: 2,
    name: 'PRODUCT ITEM NUMBER 2',
    description: 'Description for product item number 2',
    thumbnail: 'https://via.placeholder.com/200x150',
    price: 199000,
    quantity: 3,
  },
  {
    id: 3,
    name: 'PRODUCT ITEM NUMBER 3',
    description: 'Description for product item number 3',
    thumbnail: 'https://via.placeholder.com/200x150',
    price: 299000,
    quantity: 1,
  },
];

export const PROMOCODE:PromoCode[] = [
  {
    code: 'AUTUMN',
    discountPercent: 10
  },
  {
    code: 'WINTER',
    discountPercent: 20
  }
]
