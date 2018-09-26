import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedtriggerDetailComponent } from './failedtrigger-detail.component';

describe('FailedtriggerDetailComponent', () => {
  let component: FailedtriggerDetailComponent;
  let fixture: ComponentFixture<FailedtriggerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedtriggerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedtriggerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
