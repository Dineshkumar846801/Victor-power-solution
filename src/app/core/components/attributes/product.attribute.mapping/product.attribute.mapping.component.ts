import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AttributeMasters } from 'src/app/models/AttributeMasters';
import { ProductInfo } from 'src/app/models/ProductInfo';
import { ProductsService } from 'src/app/services/products.service';
import { __propKey } from 'tslib';

interface ProductAttributeMapping {
  productId?: number;
  attributeId?: number;
}
interface ProductAttributeMappingVM extends ProductAttributeMapping {
  productTitle: string;
  attributeDisplayName: string;
}

@Component({
  selector: 'app-product.attribute.mapping',
  templateUrl: './product.attribute.mapping.component.html',
  styleUrls: ['./product.attribute.mapping.component.css'],
})
export class ProductAttributeMappingComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductsService) {}

  button = 'Submit';

  productAttributesSubscription: Subscription | null = null;
  productTitleSubscription: Subscription | null = null;

  get productTtile(): ProductInfo {
    return {
      imageUrl: '',
      description: '',
      rating: '',
      title: '',
      id: '',
      discountUrl: '',
    };
  }

  get productDetails(): AttributeMasters {
    return {
      imageUrl: '',
      title: '',
      duty: 'Prime',
      no_of_cylinders: 2,
      no_of_phases: '1/3',
      output_voltage: '1/3',
      power_factor_lagging: 0.8,
      currentPhase: '',
      frequency: '',
      governing_class: '',
      starting_system: '',
      fuel_tank_capacity: 12,
      genset_dimension: '',
      genset_weight: 40,
    };
  }

  product: AttributeMasters = {
    imageUrl: '',
    title: '',
    duty: 'Prime',
    no_of_cylinders: 2,
    no_of_phases: '1/3',
    output_voltage: '1/3',
    power_factor_lagging: 0.8,
    currentPhase: '',
    frequency: '',
    governing_class: '',
    starting_system: '',
    fuel_tank_capacity: 12,
    genset_dimension: '',
    genset_weight: 40,
  };

  productAttributes: ProductInfo[] = [];
  productTitles: ProductInfo[] = [];
  productsCustomAttributes: AttributeMasters[] = [];

  private loadProductAttributeMaster = () => {
    this.productService.getAll().subscribe({
      next: (_productsAttributes) => {
        this.productAttributes = _productsAttributes;
      },
    });
  };

  private productTitle = () => {
    this.productTitleSubscription = this.productService.getAll().subscribe({
      next: (_productTitle) => {
        this.productTitles = _productTitle;
      },
    });
  };

  attributeProductForm = new FormGroup({
    productTitle: new FormControl(),
    attributeDisplayName: new FormControl(),
  });

  productAttributesMappingVM: Array<ProductAttributeMappingVM> = [];

  ngOnInit(): void {
    console.log(Object.keys(this.product));
    this.loadProductAttributeMaster();
    this.productTitle();
  }

  onSubmitHandler() {
    // let productIdAndProductAttribute:ProductAttributeMapping[] = [{
    //   productId:1,
    //   attributeId:2

    // },{
    //   productId:1,
    //   attributeId:3

    // },{
    //   productId:2,
    //   attributeId:2

    // }]

    let productAttribute: ProductAttributeMappingVM = {
      productTitle: '',
      attributeDisplayName: '',
    };

    productAttribute.productTitle = this.attributeProductForm.value.productTitle;
    productAttribute.attributeDisplayName = this.attributeProductForm.value.attributeDisplayName;

    this.productAttributesMappingVM.push(productAttribute);
    this.attributeProductForm.reset();
  }

  editProductMappingHandler(productMapping: ProductAttributeMappingVM) {
    // let productAttribute: ProductAttributeMappingVM = {
    //   productTitle:'',
    //   attributeDisplayName: '',
    // }

    this.attributeProductForm.patchValue({
      productTitle: productMapping.productTitle,
      attributeDisplayName: productMapping.attributeDisplayName,
    });

    let index = this.productAttributesMappingVM.findIndex((_product) => {
      _product.productTitle == productMapping.productTitle;
    });

    // productAttribute.productTitle = attributeProductForm.value.productTitle;
    // productAttribute.attributeDisplayName = attributeProductForm.value.attributeDisplayName;
    // this.productAttributesMappingVM[index] = productAttribute;
    // this.attributeProductForm.reset();
  }

  deleteProductMappingHandler(productMapping: ProductAttributeMappingVM) {
    let index = this.productAttributesMappingVM.findIndex((product) => {
      product.attributeDisplayName === productMapping.attributeDisplayName;
    });

    this.productAttributesMappingVM.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.productAttributesSubscription && this.productAttributesSubscription.unsubscribe();
    this.productTitleSubscription?.unsubscribe();
  }
}
