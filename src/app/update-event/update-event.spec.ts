import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEvent } from './update-event';

describe('UpdateEvent', () => {
  let component: UpdateEvent;
  let fixture: ComponentFixture<UpdateEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
