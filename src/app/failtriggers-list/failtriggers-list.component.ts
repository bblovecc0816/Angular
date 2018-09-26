import { Component, OnInit } from '@angular/core';
import { DPAllFailedTriggersDetail } from '../model/dp_allfailedtriggers_detail';
import { TriggersService } from '../service/all-triggers-summary.service';

@Component({
  selector: 'app-failtriggers-list',
  templateUrl: './failtriggers-list.component.html',
  styleUrls: ['./failtriggers-list.component.css']
})
export class FailtriggersListComponent implements OnInit {
  p: number = 1;
  failedTriggerList: DPAllFailedTriggersDetail[];
  constructor(private triggerService: TriggersService) { }

  ngOnInit() {
    this.getFailedTriggersList();
  }
  getFailedTriggersList(): void {
    this.triggerService.getFailedTriggersList()
      .subscribe(failedList => {this.failedTriggerList = failedList;
      console.log(this.failedTriggerList); });
  }
}

