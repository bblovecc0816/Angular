import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltriggersSummaryComponent } from './alltriggers-summary.component';

describe('AlltriggersSummaryComponent', () => {
  let component: AlltriggersSummaryComponent;
  let fixture: ComponentFixture<AlltriggersSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltriggersSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltriggersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
