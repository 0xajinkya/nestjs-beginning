import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  fetchProducts() {
    return [...this.products];
  }

  fetchProduct(price: number) {
    console.log(this.products);
    this.products.map((p) => console.log(p.price, price));
    const product = this.products.filter((p) => p.price == price)[0];
    if (!product) {
      throw new NotFoundException();
    }
    return { ...product };
  }

  updateProduct(productPrice: number, prodBuyers: number, prodReview: string) {
    const product = this.products.filter((p) => p.price == productPrice)[0];
    if (!product) {
      throw new NotFoundException();
    }
    product.buyers = prodBuyers;
    product.review = prodReview;
    return { ...product };
  }
}
