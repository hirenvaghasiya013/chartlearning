import { Component } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngchart';
  dataValue: any = 'January';
  dataType: any = 'My First dataset';
  dataVertical: any = '56';
  dataLineValue: any = '330';
  dataLineType: any = 'January';

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  barChartType: string = 'horizontalBar';
  barChartLegend = true;
  barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Resources' }
  ];
  myColors = [
    {
      backgroundColor: 'rgba(247, 115, 28, .1)',
      borderColor: 'rgb(47, 50, 58)',
      pointBackgroundColor: 'rgb(247, 115, 28)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(247, 115, 28, .8)'
    }
  ];

  lineChartOptions = {
    responsive: true
  };
  lineChartLabels = ['January', 'February', 'Mars', 'April'];
  lineChartType: string = 'line';
  lineChartLegend = false;
  lineChartData = [
    { data: [330, 600, 260, 700], label: 'Amount in USD' }
  ];
  onLineChartClick(e) {
    // console.log(e, e.active[0]._model.label, e.active[0]._model.datasetLabel);

    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const indexY = e.active[0]._index;
      const activePoints = chart.getElementAtEvent(e.event);

      if (activePoints.length > 0) {
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];

        console.log("series id from your data source = " + this.lineChartData[activePoints[0]._datasetIndex].data[indexY]);
        console.log("label from your dataset = " + label);

        this.dataLineValue = label;
        this.dataLineType = this.lineChartData[activePoints[0]._datasetIndex].data[indexY];
      }
    }
  }

  onBarChartClick(e) {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const indexY = e.active[0]._index;
      const activePoints = chart.getElementAtEvent(e.event);

      if (activePoints.length > 0) {
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];

        console.log("series from your dataset = " + activePoints[0]._model.datasetLabel);
        console.log("dataset index = " + activePoints[0]._datasetIndex);
        console.log("series id from your data source = " + this.barChartData[activePoints[0]._datasetIndex].data[indexY]);
        console.log("series from your data source = " + this.barChartData[activePoints[0]._datasetIndex].label);
        console.log("label from your dataset = " + label);

        this.dataValue = label;
        this.dataType = this.barChartData[activePoints[0]._datasetIndex].label;
        this.dataVertical = this.barChartData[activePoints[0]._datasetIndex].data[indexY];
      }
    }
  }
}
