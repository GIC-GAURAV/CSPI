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
  constructor() { }

  ngOnInit(): void {
  }

}
