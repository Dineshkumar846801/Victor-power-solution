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

  button = 'Submit';
  updateProduct: ProductInfo | any;
  subscription: Subscription | null = null;
  deleteProductSubscription: Subscription | null = null;

  private get _formInitialState(): ProductInfo | any {
    return {
      values: {
        imageUrl: '',
        description: '',
        id: '',
        rating: 0,
        discountUrl: '',
      },
    };
  }

  // formValue: ProductInfo = this._formInitialState;

  get product(): ProductInfo {
    return {
      imageUrl: '',
      id: '',
      description: '',
      title: '',
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

  // formValue: ProductInfo = this.productInfo.value : ProductInfo;
  onSubmit() {
    if (this.button == 'Submit') {
      if (this.productForm.valid) {
        //convert form value to particular type
        const payload = this.productForm.value as ProductInfo;

        this.productService.createProduct(payload).subscribe({
          next: (_product) => {
            if (_product) {
              // load all data one more time
              this.loadProducts();
              this.productForm.reset();
              this.products.unshift(_product as ProductInfo);
            }
          },
        });
      }
    } else {
      this.productService.updateProduct(this.updateProduct?.id, this.productForm.value as ProductInfo).subscribe({
        next: (_product) => {
          const item_index = this.products.findIndex((p) => p.id === _product.id);
          this.products[item_index] = this.productForm.value as ProductInfo;
          this.productForm.reset();
        },
      });
      this.button = 'Submit';
    }
  }

  editProductHandler(product: ProductInfo) {
    this.button = 'Update';
    this.productForm.patchValue({
      imageUrl: product.imageUrl,
      description: product.description,
      discountUrl: product.discountUrl,
      rating: product.rating,
    });

    this.updateProduct = product;
  }

  deleteProductHandler(product: ProductInfo) {
    if (confirm('Are your sure want to delete?')) {
      this.deleteProductSubscription = this.productService.delete(product).subscribe({
        next: (status) => {
          const item_index = this.products.findIndex((p) => {
            return p.id === product.id;
          });
          this.products.splice(item_index, 1);
          alert(status);
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

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
    this.deleteProductSubscription?.unsubscribe();
  }
}
