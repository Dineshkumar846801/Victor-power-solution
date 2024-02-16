import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInfo } from '../models/ProductInfo';
import { ProductDetails } from '../models/productDetailsInfo';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ProductInfo[]>('http://localhost:3000/products');
  }

  createProduct(productInfo: ProductInfo) {
    return this.http.post('http://localhost:3000/products', productInfo);
  }

  updateProduct(id: string, product: ProductInfo) {
    return this.http.put<ProductInfo>(`http://localhost:3000/products/${id}`, product);
  }

  delete(product: ProductInfo) {
    return this.http.delete<ProductInfo>(`http://localhost:3000/products/${product.id}`);
  }

  getAllProductDetails() {
    return this.http.get<ProductDetails[]>('http://localhost:3000/productDetails');
  }
}
