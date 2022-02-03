import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculateDateTime, convertDateTOIST } from 'src/app/common/commonFunctions';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  selectedCaseId = ""
  $caseSub: Subscription = new Subscription;


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

  public steps:any[] =    [];
  constructor( private _common : CommonService) { }

  ngOnInit(): void {
    this.$caseSub = this._common.caseID.subscribe(caseId=>{
      if(caseId){
        this.selectedCaseId = caseId;
        this.getCaseIdData(this.selectedCaseId)
      }
    })
  }

  getCaseIdData(id: any){
    this._common.fetchCaseLevelData(id).subscribe(res=>{
      if(res.length){
        this.steps = res
      }
      else{
        this.steps = [];
      }
    })
  }

  changeDateTOIST(inputData: any){
    return convertDateTOIST(inputData, 'Asia/Kolkata');
  }

  timeTaken (a: any,b:any){
      return calculateDateTime(a,b);
  }
}
