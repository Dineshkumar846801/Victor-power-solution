import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDetailsInfo } from 'src/app/models/productDetailsInfo';

@Component({
  selector: 'app-attribute.master',
  templateUrl: './attribute.master.component.html',
  styleUrls: ['./attribute.master.component.css'],
})
export class AttributeMasterComponent {
  get productDetails(): ProductDetailsInfo {
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

  attributeMasterForm = new FormGroup({
    commanName: new FormControl(null, []),
    displayName: new FormControl({ value: null, disabled: true }, []),
    type: new FormControl('String'),
  });

  onSubmitHandler() {}
}
