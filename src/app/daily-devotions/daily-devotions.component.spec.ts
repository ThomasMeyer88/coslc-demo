import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDevotionsComponent } from './daily-devotions.component';

describe('DailyDevotionsComponent', () => {
  let component: DailyDevotionsComponent;
  let fixture: ComponentFixture<DailyDevotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyDevotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDevotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
