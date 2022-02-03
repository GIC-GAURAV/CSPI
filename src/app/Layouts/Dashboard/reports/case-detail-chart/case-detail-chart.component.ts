import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

const  data = {
  chart: {
    caption: "Status",
    yaxisname: "",
    subcaption: "",
    drawcrossline: "1",
    plottooltext: "$value $seriesName's in $label",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "29/01/2022"
        },
        {
          label: "30/01/2022"
        },
        {
          label: "31/01/2022"
        },
        {
          label: "01/02/2022"
        },
        {
          label: "02/02/2022"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "REQUESTS RECEIVED",
      data: [
        {
          value: "15"
        },
        {
          value: "12"
        },
        {
          value: "18"
        },
        {
          value: "20"
        },
        {
          value: "16"
        }
      ]
    },
    {
      seriesname: "REQUESTS PROCESSED",
      data: [
        {
          value: "15"
        },
        {
          value: "6"
        },
        {
          value: "12"
        },
        {
          value: "20"
        },
        {
          value: "16"
        }
      ]
    },
    {
      seriesname: "REQUESTS IN QUEUE",
      data: [
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "0"
        }
      ]
    },
    {
      seriesname: "EXCEPTIONS RECEIVED",
      data: [
        {
          value: "0"
        },
        {
          value: "6"
        },
        {
          value: "4"
        },
        {
          value: "0"
        },
        {
          value: "0"
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-case-detail-chart',
  templateUrl: './case-detail-chart.component.html',
  styleUrls: ['./case-detail-chart.component.css']
})
export class CaseDetailChartComponent implements OnInit {

  type = "msarea";
  dataFormat = "json";
  dataSource = data;
  width = '100%'
  constructor(private commonSrv : CommonService) { }

  ngOnInit(): void {
  }

}
