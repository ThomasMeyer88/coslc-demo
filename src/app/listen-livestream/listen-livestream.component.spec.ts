import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenLivestreamComponent } from './listen-livestream.component';

describe('ListenLivestreamComponent', () => {
  let component: ListenLivestreamComponent;
  let fixture: ComponentFixture<ListenLivestreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenLivestreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenLivestreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
