import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailFieldsComponent } from './product-detail-fields.component';

describe('ProductDetailFieldsComponent', () => {
  let component: ProductDetailFieldsComponent;
  let fixture: ComponentFixture<ProductDetailFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
