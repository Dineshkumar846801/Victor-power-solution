import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDetails } from 'src/app/models/productDetailsInfo';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit, OnDestroy {
  //alwasy try to create valid and meaningfull variables
  params1: string = '';

  //hold multiple product details
  productsDetails: ProductDetails[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.params1 = params['product'];
    });
  }

  productDetailsSubscription: Subscription = new Subscription();

  currentProduct: ProductDetails | null = null;

  get productDetails(): ProductDetails {
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

  loadProduDetails = () => {
    this.productDetailsSubscription = this.productService.getAllProductDetails().subscribe({
      next: (_product) => {
        this.productsDetails = _product;
        this.currentProduct = _product[Number(this.params1)];
      },
    });
  };

  ngOnInit(): void {
    this.loadProduDetails();
  }

  ngOnDestroy(): void {
    this.productDetailsSubscription?.unsubscribe();
  }
}
