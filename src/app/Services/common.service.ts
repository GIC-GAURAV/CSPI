import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountRequestModel, CountResponse, CountResponseModel, WorkerLevelReqCountModel, WorkerLevelResponseModel } from '../common/dataModel';
import { AppConfig } from './app-config.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  api_url= '';
  panelWidth = 'calc(100vw - 350px)';
  caseID = new BehaviorSubject('');

  //apiURL = 'http://10.2.60.122:8097/api/india/';
  constructor(private _http: HttpClient, public config: AppConfig) {
    this.api_url = config.apiUrl;
  }

  contentWidth:any = new BehaviorSubject(null)

  getCountforActivity(obj: CountRequestModel): Observable<CountResponseModel> {
    return this._http.post<CountResponseModel>(
      `${this.api_url}get-overall-count`, obj
    )
  }

  fetchWorkerLevelData(obj:WorkerLevelReqCountModel): Observable<WorkerLevelResponseModel>{
    return this._http.post<WorkerLevelResponseModel>(
      `${this.api_url}get-worker-level-name-count`, obj
    )
  }
  setWidth(val: string){
    this.panelWidth = val;
  }

  fetchCaseLevelData(caseID:any): Observable<any[]>{
    const obj = {
      "caseNo": caseID
  }

    return this._http.post<any>(`${this.api_url}find-report`, obj)
  }
}
