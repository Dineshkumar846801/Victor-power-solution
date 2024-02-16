export interface ProductDetails {
  imageUrl: string;
  title: string;
  duty: string;
  no_of_cylinders: number;
  no_of_phases: number | string;
  output_voltage: number | string;
  power_factor_lagging: number;
  currentPhase: string | number;
  frequency: number | string;
  governing_class: string;
  starting_system: string;
  fuel_tank_capacity: number;
  genset_dimension: number | string;
  genset_weight: number;
}
