import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdditionalComponent } from './product-additional.component';

describe('ProductAdditionalComponent', () => {
  let component: ProductAdditionalComponent;
  let fixture: ComponentFixture<ProductAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAdditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check Add to Cart has been called', () => {
    expect(component.AddToCart).toHaveBeenCalled();
  });

  it('should check go Back button', () => {
    expect(component.goBack).toHaveBeenCalled();
  });

  it('should check showProductis called with id', () => {
    expect(component.showProductid).toHaveBeenCalledWith(component.id);
  });


});
