import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
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
  public colors : any[] = [
    {
      from : 0,
      to : 100,
      color : "#37b400"
    }
  ]
  public value1 = 30;
  public value2 = 40;
  public value3 = 50;
  public value4 = 60;
  public value5 = 70;
  public value6 = 80;
  public rangeSize = 10
  public rangePlaceholderColor = ""

  public dances = [
    {
      danceName: "Tango",
      description:
        "Tango is a partner dance which originated in the 1880s along the River Plate, the natural border between Argentina and Uruguay.",
    },
    {
      danceName: "Flamenco",
      description: `Flamenco is a Spanish art form made up of three parts: guitar playing ('guitarra'), song ('cante'), and dance ('baile').`,
    },
    {
      danceName: "Pasodoble",
      description:
        "Pasodoble (Spanish: double step) is Spanish a dance that emulates the movements of a bullfight.",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
