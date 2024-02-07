import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductInfo } from 'src/app/models/ProductInfo';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css'],
})
export class ViewproductsComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  get product(): ProductInfo {
    return {
      imageUrl: '',
      description: '',
      rating: 0,
      discountUrl: '',
    };
  }

  productInfo = new FormGroup({
    imageUrl: new FormControl(this.product.imageUrl),
    description: new FormControl(this.product.description),
    rating: new FormControl(this.product.description),
    discountUrl: new FormControl(this.product.discountUrl),
  });

  ngOnInit(): void {}

  onSubmit() {
    this.productInfo.patchValue({
      imageUrl:
        'https://www.victorpowersolutions.com/assets/images/products/kcc_portable_2-20/418_360/kcc.jpeg',
      description:
        'Diesel : 15kVA to 1010 kVA Available GAS : 15 kVA to 200 kVA Available',
      rating: '0',
      discountUrl:
        'https://www.victorpowersolutions.com/assets/images/products/product-offer-10per.png',
    });

    this.productService.product().subscribe((data) => {
      console.log(data);
    });
  }
}
