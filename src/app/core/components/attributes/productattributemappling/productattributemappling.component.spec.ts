import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductattributemapplingComponent } from './productattributemappling.component';

describe('ProductattributemapplingComponent', () => {
  let component: ProductattributemapplingComponent;
  let fixture: ComponentFixture<ProductattributemapplingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductattributemapplingComponent]
    });
    fixture = TestBed.createComponent(ProductattributemapplingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
