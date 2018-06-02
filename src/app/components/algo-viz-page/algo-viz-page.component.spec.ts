import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoVizPageComponent } from './algo-viz-page.component';

describe('AlgoVizPageComponent', () => {
  let component: AlgoVizPageComponent;
  let fixture: ComponentFixture<AlgoVizPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoVizPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoVizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
