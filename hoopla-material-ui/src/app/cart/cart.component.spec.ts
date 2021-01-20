import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with message `CHECKOUT`', () => {
    expect(component.checkoutbtn).toContain('CHECKOUT');
  });

  it('should have an order_placed method', () => {
    expect(component.order_placed).toHaveBeenCalled();
  });

  it('should have card array storing card data', () => {
    expect(component.cardArry).toBeTruthy();
  });

});

  
