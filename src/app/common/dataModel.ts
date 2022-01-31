export interface ActivityCount {
  success:    boolean;
  code:       string;
  successMsg: string;
  response:   string;
}
export interface CountRequestModel {
  fromDate:           string;
  toDate:             string;
  status:             string;
  activityWorkerName: string;
}
export interface CountResponseModel {
  success:    boolean;
  code:       string;
  successMsg: string;
  response:   CountResponse;
}

export interface CountResponse {
  requestReceived:  number;
  requestProcessed: number;
  requestInQueue:   number;
  requestFailed:    number;
}

export interface WorkerLevelReqCountModel {
  fromDate:           string;
  toDate:             string;
}

export interface WorkerLevelResponseModel {
  success:    boolean;
  code:       string;
  successMsg: string;
  response:   WorkerLevelRespons[];
}

export interface WorkerLevelRespons {
  workerName:       string;
  requestReceived:  number;
  requestProcessed: number;
  requestInQueue:   number;
  requestFailed:    number;
}
