import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeIconCardComponent } from './large-icon-card.component';

describe('LargeIconCardComponent', () => {
  let component: LargeIconCardComponent;
  let fixture: ComponentFixture<LargeIconCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeIconCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeIconCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
