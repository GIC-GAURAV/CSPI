import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ActivityCount } from '../common/dataModel';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiURL = 'http://10.2.60.122:8097/api/india/';
  constructor(private _http: HttpClient) {}

  getCountforActivity(workerName: string, status: string, time: string): Observable<ActivityCount> {
    // alert('1')
    const obj = {
      activityWorkerName: workerName,
      status: status,
      requestTimestamp: time,
    };
    return this._http.post<ActivityCount>(
      `${this.apiURL}get-request-received-count`, obj
    );
  }
}
