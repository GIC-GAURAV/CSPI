import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-case-reports',
  templateUrl: './case-reports.component.html',
  styleUrls: ['./case-reports.component.css'],

})
export class CaseReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public steps =    [
    {
        "status": "failed",
        "metaData": "{\"crnNo\": \"pending\", \"caseNo\": \"1640782695745\", \"checkId\": \"\", \"caseUUID\": 78}",
        "activityWorkerName": "CSPI Case Creation JSON Worker",
        "wdTransactionId": 447,
        "taskListId": 458,
        "errorJson": null,
        "issuedTimestamp": null,
        "responseJson": null,
        "responseTimestamp": "2021-12-29T07:59:11.748+00:00",
        "requestTimestamp": "2021-12-29T07:59:11.748+00:00",
        "activityTypeId": 10,
        "errorCause": null,
        "acknowledgementTimestamp": null
    },
    {
        "status": "completed",
        "metaData": "{\"crnNo\": \"pending\", \"caseNo\": \"1640782695745\", \"checkId\": \"\", \"caseUUID\": 78}",
        "activityWorkerName": "CSPI Case Creation JSON Worker",
        "wdTransactionId": 501,
        "taskListId": 512,
        "errorJson": null,
        "issuedTimestamp": null,
        "responseJson": null,
        "responseTimestamp": "2021-12-29T18:01:25.897+00:00",
        "requestTimestamp": "2021-12-29T12:58:10.220+00:00",
        "activityTypeId": 10,
        "errorCause": null,
        "acknowledgementTimestamp": null
    },
    {
        "status": "completed",
        "metaData": "{\"crnNo\": \"R276-7745551-WEST-2021\", \"caseNo\": \"1640782695745\", \"checkId\": \"\", \"caseUUID\": 78}",
        "activityWorkerName": "CSPI Case Creation Worker",
        "wdTransactionId": 502,
        "taskListId": 513,
        "errorJson": null,
        "issuedTimestamp": null,
        "responseJson": null,
        "responseTimestamp": "2021-12-29T18:02:08.697+00:00",
        "requestTimestamp": "2021-12-29T13:02:08.636+00:00",
        "activityTypeId": 11,
        "errorCause": null,
        "acknowledgementTimestamp": null
    },
    {
        "status": "completed",
        "metaData": "{\"crnNo\": \"R276-7745551-WEST-2021\", \"caseNo\": \"1640782695745\", \"checkId\": \"\", \"caseUUID\": 78}",
        "activityWorkerName": "DocValidation Worker",
        "wdTransactionId": 783,
        "taskListId": 794,
        "errorJson": null,
        "issuedTimestamp": null,
        "responseJson": null,
        "responseTimestamp": "2021-12-30T16:11:38.140+00:00",
        "requestTimestamp": "2021-12-30T11:11:16.504+00:00",
        "activityTypeId": 1,
        "errorCause": null,
        "acknowledgementTimestamp": null
    },
    {
        "status": "completed",
        "metaData": "{\"crnNo\": \"R276-7745551-WEST-2021\", \"caseNo\": \"1640782695745\", \"checkId\": \"\", \"caseUUID\": 78}",
        "activityWorkerName": "CaseLevel MI Worker",
        "wdTransactionId": 785,
        "taskListId": 796,
        "errorJson": null,
        "issuedTimestamp": null,
        "responseJson": null,
        "responseTimestamp": "2021-12-30T16:12:07.097+00:00",
        "requestTimestamp": "2021-12-30T11:12:01.119+00:00",
        "activityTypeId": 2,
        "errorCause": null,
        "acknowledgementTimestamp": null
    },
    {
        "status": "completed",
        "metaData": "{\"crnNo\": \"R276-7745551-WEST-2021\", \"caseNo\": \"1640782695745\", \"checkId\": \"\", \"caseUUID\": 78}",
        "activityWorkerName": "Scoping Worker",
        "wdTransactionId": 787,
        "taskListId": 798,
        "errorJson": null,
        "issuedTimestamp": null,
        "responseJson": null,
        "responseTimestamp": "2021-12-30T11:14:53.859+00:00",
        "requestTimestamp": "2021-12-30T11:14:23.396+00:00",
        "activityTypeId": 5,
        "errorCause": null,
        "acknowledgementTimestamp": null
    },
    {
        "status": "completed",
        "metaData": "{\"crnNo\": \"R276-7745551-WEST-2021\", \"caseNo\": \"1640782695745\", \"checkId\": \"\", \"caseUUID\": 78}",
        "activityWorkerName": "Check Creation Worker",
        "wdTransactionId": 789,
        "taskListId": 800,
        "errorJson": null,
        "issuedTimestamp": null,
        "responseJson": null,
        "responseTimestamp": "2021-12-30T16:16:10.639+00:00",
        "requestTimestamp": "2021-12-30T11:15:48.733+00:00",
        "activityTypeId": 6,
        "errorCause": null,
        "acknowledgementTimestamp": null
    }
];
}
