import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditFieldsComponent } from './product-edit-fields.component';

describe('ProductEditFieldsComponent', () => {
  let component: ProductEditFieldsComponent;
  let fixture: ComponentFixture<ProductEditFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
