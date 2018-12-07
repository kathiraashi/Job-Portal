import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelJobApplyComponent } from './model-job-apply.component';

describe('ModelJobApplyComponent', () => {
  let component: ModelJobApplyComponent;
  let fixture: ComponentFixture<ModelJobApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelJobApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelJobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
