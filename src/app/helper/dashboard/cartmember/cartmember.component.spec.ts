import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmemberComponent } from './cartmember.component';

describe('CartmemberComponent', () => {
  let component: CartmemberComponent;
  let fixture: ComponentFixture<CartmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
