import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastBookings } from './past-bookings';

describe('PastBookings', () => {
  let component: PastBookings;
  let fixture: ComponentFixture<PastBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastBookings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastBookings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
