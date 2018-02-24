import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocoGpsTableComponent } from './loco-gps-table.component';

describe('LocoGpsTableComponent', () => {
  let component: LocoGpsTableComponent;
  let fixture: ComponentFixture<LocoGpsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocoGpsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocoGpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
