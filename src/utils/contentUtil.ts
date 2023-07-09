import {
  thumbnail1,
  product2,
  product3,
  product4,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  product1,
} from '../assets';
import { Product } from '../interfaces/contentInterfaces';

export const imgArray = [product1, product2, product3, product4];
export const thumArray = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

export const productInfo: Product = {
  id: 'product1',
  title: 'Fall Limited Edition Sneakers',
  desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '125.00',
  actualPrice: '250.00',
  discount: '50',
};
