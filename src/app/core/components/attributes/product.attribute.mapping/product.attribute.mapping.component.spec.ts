import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAttributeMappingComponent } from './product.attribute.mapping.component';

describe('ProductAttributeMappingComponent', () => {
  let component: ProductAttributeMappingComponent;
  let fixture: ComponentFixture<ProductAttributeMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAttributeMappingComponent]
    });
    fixture = TestBed.createComponent(ProductAttributeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
