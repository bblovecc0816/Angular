import { Component, OnInit } from '@angular/core';
import { DPAlltriggersSummary } from '../model/dp.log.model';
import {DPAllTriggersByInterfaceQueueName} from '../model/dp.log.model';
import { TriggersService } from '../service/all-triggers-summary.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-alltriggers-summary',
  templateUrl: './alltriggers-summary.component.html',
  styleUrls: ['./alltriggers-summary.component.css']
})
export class AlltriggersSummaryComponent implements OnInit {
  p: number = 1;
  alltriggersSummarys: DPAlltriggersSummary[];
  chartOption: {};
  chartOption2: {};
  constructor(private  allTriggerSummaryService: TriggersService) { }

  ngOnInit() {
    this.getDPAllTriggersByInterfaceQueueName();
    this.getDPAllTriggersByTruckCenter();
  }
  getAllTriggersSummarys(): void {
    this.allTriggerSummaryService.getAllTriggersSummary()
      .subscribe(summary => {this.alltriggersSummarys = summary; console.log(this.alltriggersSummarys);
      });
  }
  getDPAllTriggersByInterfaceQueueName(): void {
    this.allTriggerSummaryService.getAllTriggersByInterfaceQueueName()
      .subscribe(summary => {
        const legendD = [];
        const seriesD = [];
        for (let i of summary) {
          legendD.push(i.InterfaceQueueName);
          seriesD.push({value: i.Number, name: i.InterfaceQueueName});
        }
        this.chartOption = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: legendD
          },
          series: [
            {
              name: 'All Triggers Statics',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: seriesD
            }
          ]
        };
      });
  }
  getDPAllTriggersByTruckCenter(): void {
    this.allTriggerSummaryService.getAllTriggersByTruckCenter()
      .subscribe(summary => {
        const legendD = [];
        const seriesD = [];
        for (let i of summary) {
          legendD.push(i.TruckCenter);
          seriesD.push({value: i.Number, name: i.TruckCenter});
        }
        this.chartOption2 = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: legendD
          },
          series: [
            {
              name: 'All Triggers Statics',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: seriesD
            }
          ]
        };
      });
  }
}
