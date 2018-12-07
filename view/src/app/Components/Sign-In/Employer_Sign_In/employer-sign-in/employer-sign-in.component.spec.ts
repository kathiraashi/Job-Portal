import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSignInComponent } from './employer-sign-in.component';

describe('EmployerSignInComponent', () => {
  let component: EmployerSignInComponent;
  let fixture: ComponentFixture<EmployerSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
