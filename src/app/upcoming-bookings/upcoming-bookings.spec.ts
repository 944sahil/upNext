import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBookings } from './upcoming-bookings';

describe('UpcomingBookings', () => {
  let component: UpcomingBookings;
  let fixture: ComponentFixture<UpcomingBookings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingBookings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingBookings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
