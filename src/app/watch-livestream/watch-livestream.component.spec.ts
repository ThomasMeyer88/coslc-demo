import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLivestreamComponent } from './watch-livestream.component';

describe('WatchLivestreamComponent', () => {
  let component: WatchLivestreamComponent;
  let fixture: ComponentFixture<WatchLivestreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchLivestreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchLivestreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
