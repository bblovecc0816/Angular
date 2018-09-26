import { Injectable } from '@angular/core';
import { DPAlltriggersSummary } from '../model/dp_alltriggers_summary';
import {DPFailedtriggersSummary} from '../model/dp_failedtriggers_summary';
import { DPAllFailedTriggersDetail } from '../model/dp_allfailedtriggers_detail';
import { DPFailedTriggersDetail } from '../model/dp_failedtrigger_detail';
import {DPAllTriggersByInterfaceQueueName} from '../model/dp_alltriggers_byqueue';
import {DPAllTriggersByTC} from '../model/dp_alltriggers_bytruckcenter';
import { MockSummarys} from '../model/mock_data';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, tap, map} from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable(

)
export class TriggersService {
  private allTriggersSummaryUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllTriggersSummary(): Observable<DPAlltriggersSummary[]> {
    const url = this.allTriggersSummaryUrl + '/listTriggerSummary';
    console.log('url:' +  url);
    return this.http.get<DPAlltriggersSummary[]>(url)
      .pipe(tap(ret => console.log('fetch all triggers summary')),
        catchError(this.handleError<DPAlltriggersSummary[]>('getAllTriggersSummary')));
  }
  getFailedTriggersSummary(): Observable<DPFailedtriggersSummary[]> {
    const url = this.allTriggersSummaryUrl + '/listTriggerFailedSummary';
    return this.http.get<DPFailedtriggersSummary[]>(url)
      .pipe(tap(ret => console.log('fetch failed triggers summary')),
        catchError(this.handleError<DPFailedtriggersSummary[]>('getFailedTriggersSummary')));
  }
  getFailedTriggerDetail(tcid: number, date: string): Observable<DPFailedTriggersDetail[]> {
    const url = `${this.allTriggersSummaryUrl}/getFailedTriggerDetails/tcid/${tcid}/date/${date}`;
    return this.http.get<DPFailedTriggersDetail[]>(url)
      .pipe(tap(ret => console.log('fetch failed triggers detail')),
        catchError(this.handleError<DPFailedTriggersDetail[]>('getFailedTriggerDetail')));
  }
  getFailedTriggersList(): Observable<DPAllFailedTriggersDetail[]> {
    const url = this.allTriggersSummaryUrl + '/listAll';
    return this.http.get<DPAllFailedTriggersDetail[]>(url)
      .pipe(tap(ret => console.log('fetch failed triggers list')),
        catchError(this.handleError<DPAllFailedTriggersDetail[]>('getFailedTriggersList')));
  }
  getAllTriggersByInterfaceQueueName(): Observable<DPAllTriggersByInterfaceQueueName[]> {
    const url = this.allTriggersSummaryUrl + '/allTriggersByInterfaceQueueName';
    console.log('url:' +  url)
    return this.http.get<DPAllTriggersByInterfaceQueueName[]>(url)
      .pipe(tap(ret => console.log('fetch all triggers by queue name')),
        catchError(this.handleError<DPAllTriggersByInterfaceQueueName[]>('getAllTriggersByInterfaceQueueName')));
  }
  getAllTriggersByTruckCenter(): Observable<DPAllTriggersByTC[]> {
    const url = this.allTriggersSummaryUrl + '/allTriggersByTruckCenter';
    console.log('url:' +  url)
    return this.http.get<DPAllTriggersByTC[]>(url)
      .pipe(tap(ret => console.log('fetch all triggers by truck center')),
        catchError(this.handleError<DPAllTriggersByTC[]>('getAllTriggersByTruckCenter')));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
