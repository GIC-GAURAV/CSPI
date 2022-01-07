import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-reports',
  templateUrl: './cases-reports.component.html',
  styleUrls: ['./cases-reports.component.css']
})
export class CasesReportsComponent implements OnInit {
  public opened = false;

  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: "Chai",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Chang",
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Aniseed Syrup",
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: "Condiments",
      },
    },
  ];
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

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

}
