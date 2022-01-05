import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  public listItems: Array<string> = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];
  public gridData: any[] = [
    {
      CaseId: 1,
      StartStage: "Case Creation",
      StartState: "CC AutoPI",
      CurrentStage: "Data Entry",
      CurrentState: "CC AutoPI-ADE-Res-S",
      CurrentStatus: "API-ADE-01-01",
      CurrentDescription: "Request Successful",
    },
    {
      CaseId: 2,
      StartStage: "Case Creation",
      StartState: "CC AutoPI",
      CurrentStage: "Data Entry",
      CurrentState: "CC AutoPI-ADE-Res-S",
      CurrentStatus: "API-ADE-01-01",
      CurrentDescription: "Request Successful",
    },
    {
      CaseId: 3,
      StartStage: "Case Creation",
      StartState: "CC AutoPI",
      CurrentStage: "Data Entry",
      CurrentState: "CC AutoPI-ADE-Res-S",
      CurrentStatus: "API-ADE-01-01",
      CurrentDescription: "Request Successful",
    },
    {
      CaseId: 4,
      StartStage: "Case Creation",
      StartState: "CC AutoPI",
      CurrentStage: "Data Entry",
      CurrentState: "CC AutoPI-ADE-Res-S",
      CurrentStatus: "API-ADE-01-01",
      CurrentDescription: "Request Successful",
    },
    {
      CaseId: 5,
      StartStage: "Case Creation",
      StartState: "CC AutoPI",
      CurrentStage: "Data Entry",
      CurrentState: "CC AutoPI-ADE-Res-S",
      CurrentStatus: "API-ADE-01-01",
      CurrentDescription: "Request Successful",
    },
    {
      CaseId: 6,
      StartStage: "Case Creation",
      StartState: "CC AutoPI",
      CurrentStage: "Data Entry",
      CurrentState: "CC AutoPI-ADE-Res-S",
      CurrentStatus: "API-ADE-01-01",
      CurrentDescription: "Request Successful",
    },
  ];
  dataSource = {
    "chart": {
        "caption": "",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "0",
        "numberSuffix": " ",
        "theme": "fusion",
        "showToolTip": "0",
        "showTickMarks": "0",
        "showTickValues": "0"
    },
    "colorRange": {
        "color": [
          {
              "minValue": "0",
              "maxValue": "20",
              "code": "#008000"
          }, {
              "minValue": "20",
              "maxValue": "40",
              "code": "#CCFC35"
          }, {
              "minValue": "40",
              "maxValue": "60",
              "code": "#F6FC35"
          }, {
              "minValue": "60",
              "maxValue": "80",
              "code": "#FCBA35"
          }, {
              "minValue": "80",
              "maxValue": "100",
              "code": "#FF0000"
          }
        ]
    },
    "dials": {
          "dial": [{
              "value": "50"
          }]
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
