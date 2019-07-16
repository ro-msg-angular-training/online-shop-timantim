import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDeleteModalComponent } from './product-detail-delete-modal.component';

describe('ProductDetailDeleteModalComponent', () => {
  let component: ProductDetailDeleteModalComponent;
  let fixture: ComponentFixture<ProductDetailDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
