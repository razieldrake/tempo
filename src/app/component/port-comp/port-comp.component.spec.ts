import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCompComponent } from './port-comp.component';

describe('PortCompComponent', () => {
  let component: PortCompComponent;
  let fixture: ComponentFixture<PortCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
