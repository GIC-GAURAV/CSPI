import { Component, DoCheck, OnInit } from '@angular/core';
import { CountRequestModel, WorkerLevelReqCountModel, WorkerLevelRespons } from 'src/app/common/dataModel';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-cases-reports',
  templateUrl: './cases-reports.component.html',
  styleUrls: ['./cases-reports.component.css']
})
export class CasesReportsComponent implements OnInit ,DoCheck{

  requestReceived = 0;
  requestProcessed = 0;
  requestInQueue = 0;
  exceptionCount = 0;
  dynaWidth = 'calc(100vw - 360px)';

  public opened = false;
  carousel : any
  content : any
  next: any
  prev: any
  item : any
  selectedId : any
  wrapperWidth:any
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

  public cardData : WorkerLevelRespons[] =[];
  constructor(public _common: CommonService) { }

  ngOnInit(): void {
    this.slider();
   this.getActivityData();
   this.getWorkerLevelActivityData()

  }
  ngDoCheck(){
this._common.contentWidth.subscribe((res:any)=>{

this.wrapperWidth=res;
console.log("====>",this.wrapperWidth)
})
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
    const gap = 0;
    this.carousel = document.getElementById("carousel")
    this.content = document.getElementById("content")
    this.next = document.getElementById("next")
    this.prev = document.getElementById("prev")
    this.item = document.getElementById('id1')

    this.next.addEventListener("click", (e :  any) => {
      // alert(width)
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

  getColorClass(val: number){
    const value = val;
    if(value === 0 ){
      return 'light-green'
    } else if( value > 0 && value < 4){
      return "orange"
    }
    return "red"
  }

  getActivityData(){
    const obj : CountRequestModel= {
      fromDate: Date.now().toString(),
      toDate: Date.now().toString(),
      status: '',
      activityWorkerName: ''

    }
    this._common.getCountforActivity(obj).subscribe(data=>{
      console.log(data)
      if(data.success){
        this.requestReceived = data.response.requestReceived;
        this.requestProcessed = data.response.requestProcessed;
        this.requestInQueue = data.response.requestInQueue;
        this.exceptionCount = data.response.requestFailed;
      }
    });
  }

  getWorkerLevelActivityData(){
    const obj: WorkerLevelReqCountModel = {
      fromDate: Date.now().toString(),
      toDate: (Date.now()).toString()
    }

    this._common.fetchWorkerLevelData(obj).subscribe(data=>{
      console.log(data)
      if(data.success){
        this.cardData = data.response
      }
    })

  }

}


