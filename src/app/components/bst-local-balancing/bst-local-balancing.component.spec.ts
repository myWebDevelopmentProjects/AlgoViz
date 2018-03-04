import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BstLocalBalancingComponent } from './bst-local-balancing.component';

describe('BstLocalBalancingComponent', () => {
  let component: BstLocalBalancingComponent;
  let fixture: ComponentFixture<BstLocalBalancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BstLocalBalancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BstLocalBalancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
