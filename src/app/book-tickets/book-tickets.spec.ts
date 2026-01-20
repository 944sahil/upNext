import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTickets } from './book-tickets';

describe('BookTickets', () => {
  let component: BookTickets;
  let fixture: ComponentFixture<BookTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTickets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
