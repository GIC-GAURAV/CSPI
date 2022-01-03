import { Component, OnInit } from '@angular/core';

const  data = {
  chart: {
    caption: "GDP Growth Rate Comparison",
    yaxisname: "",
    subcaption: "India vs China",
    drawcrossline: "1",
    numbersuffix: "%",
    plottooltext: "$seriesName's GDP grew $dataValue in $label",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Jan"
        },
        {
          label: "Feb"
        },
        {
          label: "Mar"
        },
        {
          label: "Apr"
        },
        {
          label: "May"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "India",
      data: [
        {
          value: "9.2"
        },
        {
          value: "7.9"
        },
        {
          value: "7.5"
        },
        {
          value: "7"
        },
        {
          value: "6.1"
        }
      ]
    },
    {
      seriesname: "China",
      data: [
        {
          value: "6.7"
        },
        {
          value: "6.7"
        },
        {
          value: "6.7"
        },
        {
          value: "6.8"
        },
        {
          value: "6.9"
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
  constructor() { }

  ngOnInit(): void {
  }

}
