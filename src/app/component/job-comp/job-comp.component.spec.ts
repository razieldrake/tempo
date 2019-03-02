import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCompComponent } from './job-comp.component';

describe('JobCompComponent', () => {
  let component: JobCompComponent;
  let fixture: ComponentFixture<JobCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
