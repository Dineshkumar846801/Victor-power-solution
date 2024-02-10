import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AttributeMasters } from 'src/app/models/AttributeMasters';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product.attribute.mapping',
  templateUrl: './product.attribute.mapping.component.html',
  styleUrls: ['./product.attribute.mapping.component.css'],
})
export class ProductAttributeMappingComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductsService) {}

  productAttributesSubscription: Subscription | null = null;

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
    duty: '',
    no_of_cylinders: 0,
    no_of_phases: '',
    output_voltage: '',
    power_factor_lagging: 0,
    currentPhase: '',
    frequency: '',
    governing_class: '',
    starting_system: '',
    fuel_tank_capacity: 0,
    genset_dimension: '',
    genset_weight: 0,
  };

  productAttributes: AttributeMasters[] = [];

  private loadProductAttributeMaster = () => {
    this.productService.getAllProductDetails().subscribe({
      next: (_productsAttributes) => {
        this.productAttributes = _productsAttributes;
      },
    });
  };

  attributeProductForm = new FormGroup({});

  ngOnInit(): void {
    console.log(Object.keys(this.product));
    this.loadProductAttributeMaster();
  }

  onSubmitHandler() {}

  ngOnDestroy(): void {
    this.productAttributesSubscription &&
      this.productAttributesSubscription.unsubscribe();
  }
}
