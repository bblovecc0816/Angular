import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailtriggersListComponent } from './failtriggers-list.component';

describe('FailtriggersListComponent', () => {
  let component: FailtriggersListComponent;
  let fixture: ComponentFixture<FailtriggersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailtriggersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailtriggersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
