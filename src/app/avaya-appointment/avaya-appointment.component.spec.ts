import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvayaAppointmentComponent } from './avaya-appointment.component';

describe('AvayaAppointmentComponent', () => {
  let component: AvayaAppointmentComponent;
  let fixture: ComponentFixture<AvayaAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvayaAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvayaAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
