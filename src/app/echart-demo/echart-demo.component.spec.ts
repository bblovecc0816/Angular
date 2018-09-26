import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartDemoComponent } from './echart-demo.component';

describe('EchartDemoComponent', () => {
  let component: EchartDemoComponent;
  let fixture: ComponentFixture<EchartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
