import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartticketsComponent } from './carttickets.component';

describe('CartticketsComponent', () => {
  let component: CartticketsComponent;
  let fixture: ComponentFixture<CartticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
