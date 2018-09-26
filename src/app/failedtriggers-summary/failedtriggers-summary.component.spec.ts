import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedtriggersSummaryComponent } from './failedtriggers-summary.component';

describe('FailedtriggersSummaryComponent', () => {
  let component: FailedtriggersSummaryComponent;
  let fixture: ComponentFixture<FailedtriggersSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedtriggersSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedtriggersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
