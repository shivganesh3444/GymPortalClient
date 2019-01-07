import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeesComponent } from './userfees.component';

describe('UserfeesComponent', () => {
  let component: UserfeesComponent;
  let fixture: ComponentFixture<UserfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
