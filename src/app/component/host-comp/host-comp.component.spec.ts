import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCompComponent } from './host-comp.component';

describe('HostCompComponent', () => {
  let component: HostCompComponent;
  let fixture: ComponentFixture<HostCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
