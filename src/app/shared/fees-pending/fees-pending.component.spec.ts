import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPendingComponent } from './fees-pending.component';

describe('FeesPendingComponent', () => {
  let component: FeesPendingComponent;
  let fixture: ComponentFixture<FeesPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
