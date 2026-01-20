import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvent } from './add-event';

describe('AddEvent', () => {
  let component: AddEvent;
  let fixture: ComponentFixture<AddEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
