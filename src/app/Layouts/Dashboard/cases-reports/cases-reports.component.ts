import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-cases-reports',
  templateUrl: './cases-reports.component.html',
  styleUrls: ['./cases-reports.component.css']
})
export class CasesReportsComponent implements OnInit {

  requestReceived = '';
  requestProcessed = '';
  requestInQueue = '';
  exceptionCount = '';

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
      "title" : "Data Ingestion",
      "caseCount" : 0,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 2,
      "title" : "Case Creation",
      "caseCount" : 1,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 3,
      "title" : "Data Entry",
      "caseCount" : 2,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 4,
      "title" : "Doc Validation",
      "caseCount" : 3,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 5,
      "title" : "Case Level MI",
      "caseCount" : 4,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 6,
      "title" : "Assisted QC",
      "caseCount" : 5,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 7,
      "title" : "Scoping",
      "caseCount" : 6,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 8,
      "title" : "Base EJC",
      "caseCount" : 7,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 9,
      "title" : "Eternal MRL",
      "caseCount" : 8,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },
    {
      "id" : 10,
      "title" : "Internal MRL",
      "caseCount" : 9,
      "type" : "Exception",
      "received" : 300,
      "processed" : 300,
      "queue" : 1
    },


  ]
  constructor(private _common: CommonService) { }

  ngOnInit(): void {
    //this.slider();
   this.getActivityData('', 'completed', new Date().toISOString())
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

  getColorClass(val: string){
    const value = parseInt(val);
    if(value === 0 ){
      return 'light-green'
    } else if( value > 0 && value < 4){
      return "orange"
    }
    return "red"
  }

  getActivityData(workerName: string, status: string, time: string){

    this._common.getCountforActivity(workerName, status, time).subscribe(data=>{
      console.log(data)
      this.requestReceived = data.response;
    })
  }
}


