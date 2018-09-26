import { Component, OnInit } from '@angular/core';
import { TriggersService } from '../service/all-triggers-summary.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-failedtrigger-detail',
  templateUrl: './failedtrigger-detail.component.html',
  styleUrls: ['./failedtrigger-detail.component.css']
})
export class FailedtriggerDetailComponent implements OnInit {
  chartOption = {};
  constructor(private location: Location,
              private route: ActivatedRoute,
              private failedTriggerDetailService: TriggersService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('tcid');
    const staticDate = this.route.snapshot.paramMap.get('date');
    this.failedTriggerDetailService.getFailedTriggerDetail(id, staticDate)
      .subscribe(failedTriggerDetail => {
        let xData = [];
        let yData = [];
        for (let d of failedTriggerDetail) {
          xData.push(d.InterfaceQueueName);
          yData.push(d.NumberOfMsgFailed);
        }
        this.chartOption = {
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : xData,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name: 'No.of failed message',
              type: 'bar',
              barWidth: '60%',
              data: yData
            }
          ]
        };
      });
  }
  goBack(): void {
    this.location.back();
  }
}
