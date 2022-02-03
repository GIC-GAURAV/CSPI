import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css'],
})
export class CaseDetailComponent implements OnInit {
  stage = [];
  state = [];
  status = [];
  caseId = [];
  searchedCase = '';

  public start: Date = new Date('10/07/2017');

  public end: Date = new Date('11/25/2017');
  dataSource = {
    chart: {
      caption: '',
      lowerLimit: '0',
      upperLimit: '100',
      showValue: '0',
      numberSuffix: ' ',
      theme: 'fusion',
      showToolTip: '0',
      showTickMarks: '0',
      showTickValues: '0',
    },
    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '20',
          code: '#008000',
        },
        {
          minValue: '20',
          maxValue: '40',
          code: '#CCFC35',
        },
        {
          minValue: '40',
          maxValue: '60',
          code: '#F6FC35',
        },
        {
          minValue: '60',
          maxValue: '80',
          code: '#FCBA35',
        },
        {
          minValue: '80',
          maxValue: '100',
          code: '#FF0000',
        },
      ],
    },
    dials: {
      dial: [
        {
          value: '50',
        },
      ],
    },
  };
  constructor(private _common: CommonService) {}

  ngOnInit(): void {}

  caseSearch(val: any) {
    if (val) {
      this._common.caseID.next(this.searchedCase);
    }
  }
}
