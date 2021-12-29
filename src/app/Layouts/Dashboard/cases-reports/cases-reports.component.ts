import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-reports',
  templateUrl: './cases-reports.component.html',
  styleUrls: ['./cases-reports.component.css']
})
export class CasesReportsComponent implements OnInit {
  public items: Array<{ url: string }> = [
    {
      url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/kukeri.jpg",
    },
    {
      url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/martenitsa.jpg",
    },
    {
      url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
