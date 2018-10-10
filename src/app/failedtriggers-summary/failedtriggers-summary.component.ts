import { Component, OnInit } from '@angular/core';
import { DPFailedtriggersSummary } from '../model/dp.log.model';
import { TriggersService } from '../service/all-triggers-summary.service';

@Component({
  selector: 'app-failedtriggers-summary',
  templateUrl: './failedtriggers-summary.component.html',
  styleUrls: ['./failedtriggers-summary.component.css']
})
export class FailedtriggersSummaryComponent implements OnInit {
  p: number = 1;
  failedTriggersSummary: DPFailedtriggersSummary[];
  chartOption: {};
  constructor(private failedTriggerSummaryService: TriggersService) { }

  ngOnInit() {
    this.getFailedTriggersSummarys();
  }

  getFailedTriggersSummarys(): void {
    this.failedTriggerSummaryService.getFailedTriggersSummary()
      .subscribe(summary => {
        this.failedTriggersSummary = summary;
        console.log(this.failedTriggersSummary);
        // this.getChartOption();
      });
  }
  /*getChartOption() {
    let lengendD = [];
    let yAxisD = [];
    let seriesD = [];
    let final = [];
    for (let i of this.failedTriggersSummary) {
      if (lengendD.indexOf(i.InterfaceQueueName)! === -1) {
          lengendD.push(i.InterfaceQueueName);
      }
      if (yAxisD.indexOf(i.StatisticDate)! === -1) {
        yAxisD.push(i.StatisticDate);
      }
    }
    /!*console.log('print lengendD');
    console.log(lengendD);
    console.log('print yAxisD');
    console.log(yAxisD);*!/

    for (let i of lengendD) {
      const data = [];
      for (let j of yAxisD) {
        // console.log(new Date(j).toLocaleDateString('en-GB'));
        const result = this.failedTriggersSummary.filter(a => a.InterfaceQueueName === i
          && a.StatisticDate === j);
        let sum: number = 0;
        if (result.length > 0) {
          result.forEach(r => sum = sum + r.NumberOfMsgFailed);
        }
        data.push(sum);
      }
      final.push({name: i,
        type: 'bar',
        stack: 'Total',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: data});
    }
    console.log('print final:');
    console.log(final);
    const yAxisFormat = [];
    yAxisD.forEach(y => yAxisFormat.push(new Date(y).toLocaleDateString('en-GB')));
    console.log('print yAxisD:');
    console.log(yAxisFormat);
    this.chartOption = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: lengendD
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis:  {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: yAxisFormat
      },
      series: final
    };
  }*/
}
