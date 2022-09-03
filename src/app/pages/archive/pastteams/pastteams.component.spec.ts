import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastteamsComponent } from './pastteams.component';

describe('PastteamsComponent', () => {
  let component: PastteamsComponent;
  let fixture: ComponentFixture<PastteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastteamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
