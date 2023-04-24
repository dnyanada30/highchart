import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements AfterViewInit {
  Highcharts: typeof Highcharts = Highcharts;
  colors: any[] = ['Red', 'Green', 'Purple', 'Yellow', 'Blue', 'Grey', 'Orange'];
  grphType: String = "column";
  radioButtonColor: boolean = false;

  public ngAfterViewInit(): void {
    this.createColumnChart();
  }

  monthLyRevenue: any = [
    {
      id: 0,
      name: 'January',
      y: 3000,
      color: 'green',
      highcharacter: 3000
    },
    {
      id: 1,
      name: 'Febuary',
      y: 5000,
      color: 'blue',
      highcharacter: 5000
    },
    {
      id: 2,
      name: 'March',
      y: 2000,
      color: 'yellow',
      highcharacter: 2000
    },
  ];

  private createColumnChart(): void {
    this.monthLyRevenue.forEach((el: any) => {
      el.y = Number(el.y);
    })
    const data: any[] = this.monthLyRevenue;
    console.log(data)
    const chart = Highcharts.chart(

      'chart-column' as any,
      {
        chart: {
          type: this.grphType,
        },
        title: {
          text: 'Market Qtr Report',
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        yAxis: {
          min: 0,
          title: { text: "Select monthly revenue" },
        },
        xAxis: {
          type: 'category',
          title: { text: "Color" },
        },
        tooltip: {
          headerFormat: `<div>Date: {point.key}</div>`,
          pointFormat: `<div>{series.name}: {point.y}</div>`,
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: 'Amount',
            data,
          },
        ],
      } as any
    );
  }

  changeGraph(radioButton: any) {

    this.grphType = radioButton
    console.log(this.grphType)
  }
  generateReport() {
    this.createColumnChart()
  }
  radionButtonAnswers(answer: any) {
    if (answer == "3rdOption") {
      this.radioButtonColor = true;


    }
    else {
      this.radioButtonColor = false;
    }
  }
}

