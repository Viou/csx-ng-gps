import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeIconCardsComponent } from './large-icon-cards.component';

describe('LargeIconCardsComponent', () => {
  let component: LargeIconCardsComponent;
  let fixture: ComponentFixture<LargeIconCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeIconCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeIconCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
