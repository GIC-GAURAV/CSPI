import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-reports',
  templateUrl: './cases-reports.component.html',
  styleUrls: ['./cases-reports.component.css']
})
export class CasesReportsComponent implements OnInit {
  public opened = false;
  carousel : any
  content : any
  next: any
  prev: any
  item : any
  selectedId : any
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

  public cardData : any = [
    {
      "id" : 1,
      "title" : "Case Creation",
      "caseCount" : 1,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 2,
      "title" : "Case Creation",
      "caseCount" : 2,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 3,
      "title" : "Case Creation",
      "caseCount" : 3,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 4,
      "title" : "Case Creation",
      "caseCount" : 4,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 5,
      "title" : "Case Creation",
      "caseCount" : 5,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 6,
      "title" : "Case Creation",
      "caseCount" : 6,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 7,
      "title" : "Case Creation",
      "caseCount" : 7,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 8,
      "title" : "Case Creation",
      "caseCount" : 8,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 9,
      "title" : "Case Creation",
      "caseCount" : 9,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 10,
      "title" : "Case Creation",
      "caseCount" : 10,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 11,
      "title" : "Case Creation",
      "caseCount" : 11,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 12,
      "title" : "Case Creation",
      "caseCount" : 12,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 13,
      "title" : "Case Creation",
      "caseCount" : 13,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 14,
      "title" : "Case Creation",
      "caseCount" : 14,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.slider();
  }

  onSelect(id : any){
    this.selectedId = id
  }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  slider(){
    const gap = 16;

    this.carousel = document.getElementById("carousel")
    this.content = document.getElementById("content")
    this.next = document.getElementById("next")
    this.prev = document.getElementById("prev")
    this.item = document.getElementById('id1')
    
    this.next.addEventListener("click", (e :  any) => {
      this.carousel.scrollBy(width + gap, 0);
    if (this.carousel.scrollWidth !== 0) {
      this.prev.style.display = "flex";
    }
    if (this.content.scrollWidth - width - gap <= this.carousel.scrollLeft + width) {
      this.next.style.display = "none";
    }
  });
  this.prev.addEventListener("click", (e : any) => {
    this.carousel.scrollBy(-(width + gap), 0);
    if (this.carousel.scrollLeft - width - gap <= 0) {
      this.prev.style.display = "none";
    }
    if (this.content.scrollWidth - width - gap <= this.carousel.scrollLeft + width) {
      this.next.style.display = "flex";
    }
  });

  let width = this.carousel.offsetWidth;
  window.addEventListener("resize", (e) => (width = this.carousel.offsetWidth));
  }
}


