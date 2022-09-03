import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurgapujaComponent } from './durgapuja.component';

describe('DurgapujaComponent', () => {
  let component: DurgapujaComponent;
  let fixture: ComponentFixture<DurgapujaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurgapujaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurgapujaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
