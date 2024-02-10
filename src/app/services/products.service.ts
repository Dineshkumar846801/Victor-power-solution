import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInfo } from '../models/ProductInfo';
import { ProductDetailsInfo } from '../models/productDetailsInfo';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ProductInfo[]>('http://localhost:3000/products');
  }

  createProduct(productInfo: ProductInfo) {
    return this.http.post('http://localhost:3000/products', productInfo);
  }

  getAllProductDetails() {
    return this.http.get<ProductDetailsInfo[]>(
      'http://localhost:3000/productDetails'
    );
  }
}
