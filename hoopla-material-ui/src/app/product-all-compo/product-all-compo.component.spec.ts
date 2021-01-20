import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAllCompoComponent } from './product-all-compo.component';

describe('ProductAllCompoComponent', () => {
  let component: ProductAllCompoComponent;
  let fixture: ComponentFixture<ProductAllCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAllCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAllCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check showProductid has been called', () => {
    expect(component.showProductid).toHaveBeenCalled();
  });

  it('should have show to be false initially', () => {
    expect(component.show).toBeFalse();
  });


});
