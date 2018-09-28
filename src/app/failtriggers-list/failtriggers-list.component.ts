import { Component, OnInit } from '@angular/core';
import { DPAllFailedTriggersDetail } from '../model/dp_allfailedtriggers_detail';
import { DPTruckCenter } from '../model/dp_truckcenter';
import { TriggersService } from '../service/all-triggers-summary.service';

import { Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-failtriggers-list',
  templateUrl: './failtriggers-list.component.html',
  styleUrls: ['./failtriggers-list.component.css']
})
export class FailtriggersListComponent implements OnInit {
  p: number = 1;
  failedTriggerList: DPAllFailedTriggersDetail[];
  store: DPAllFailedTriggersDetail[];
  // truckCenters$: Observable<DPTruckCenter[]>;
  private searchTerms = new Subject<string>();
  constructor(private triggerService: TriggersService) { }

  ngOnInit() {
    this.getFailedTriggersList();
  }
  search(term: string) {
    if (term === '') {
      this.failedTriggerList = this.store;
    } else {
      this.failedTriggerList = this.store.filter(f => f.TruckCenter.indexOf(term) >= 0);
    }
  }
  getFailedTriggersList(): void {
    this.triggerService.getFailedTriggersList()
      .subscribe(failedList => {this.failedTriggerList = failedList;
      this.store = failedList;
      console.log(this.failedTriggerList); });
  }
}

