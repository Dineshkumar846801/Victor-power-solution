import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductInfo } from 'src/app/models/ProductInfo';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css'],
})
export class ViewproductsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductsService) {}

  subscription: Subscription | null = null;
  private get _formInitialState(): ProductInfo | any {
    return {
      values: {
        imageUrl: '',
        description: '',
        rating: 0,
        discountUrl: '',
      },
    };
  }

  // formValue: ProductInfo = this._formInitialState;

  get product(): ProductInfo {
    return {
      imageUrl: '',
      description: '',
      rating: '',
      discountUrl: '',
    };
  }

  products: ProductInfo[] = [];

  productForm = new FormGroup({
    imageUrl: new FormControl(this.product.imageUrl),
    description: new FormControl(this.product.description),
    rating: new FormControl(this.product.description),
    discountUrl: new FormControl(this.product.discountUrl),
  });

  ngOnInit(): void {
    this.loadProducts();
  }
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  // formValue: ProductInfo = this.productInfo.value : ProductInfo;
  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);

      //convert form value to particular type
      const payload = this.productForm.value as ProductInfo;

      this.productService.createProduct(payload).subscribe({
        next: (_product) => {
          if (_product) {
            // load all data one more time
            this.loadProducts();
            this.productForm.reset();
            this.products.push(_product as ProductInfo);
          }
        },
      });
    }
  }

  private loadProducts = () => {
    this.subscription = this.productService.getAll().subscribe({
      next: (_products: ProductInfo[]) => {
        this.products = _products;
      },
    });
  };
}
