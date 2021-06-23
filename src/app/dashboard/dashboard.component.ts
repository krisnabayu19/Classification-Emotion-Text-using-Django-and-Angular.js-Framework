import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
import { DataDashboard} from 'src/app/models/dashboard.model';
import { DashboardService } from 'src/app/services/dashboard.service';

const indoMap = require('@highcharts/map-collection/countries/id/id-all.geo.json');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

loading = true;
dataDashboard?: DataDashboard;

chartOptionsBar: any;
chartOptionsLine: any;
chartOptionsPie: any;
chartOptionsMapsBahagia: any;
chartOptionsMapsTidakBahagia: any;

constructor(private dashboardService: DashboardService) { }

ngOnInit(): void {
  this.dashboardService.getAllData()
  .subscribe(
      data => {
          this.dataDashboard = data;

          
          // Bar
          this.chartOptionsBar = {
              chart: {
                  type: 'column',
                  backgroundColor:'#202940',
                  plotBorderColor:'#000000'
              },
              title: {
                  text: 'Bar Klasifikasi Emosi',
                  style :{ "color": "#ffffff", "fontSize": "18px" }
              },
              subtitle:{
                text: 'Source Map : Indonesia'
              },
              legend :{
                itemHiddenStyle : {"color": "#333333"},
                itemHoverStyle : {"color": "#333333"},
                itemStyle : {"color": "#cccccc", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis"}
              },
              xAxis: {
                  categories: data.data_bar
              },
              yAxis: {
                title: {
                    text: 'Jumlah Data'
                }
            },
              plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
              },
              series: [
                { 
                  type: "column",
                  name: 'Data Emosi Bahagia',
                  color : '#17aabc',
                  data: data.value_bar_bahagia
                },
                {
                 type: "column",
                 name: 'Data Emosi Tidak Bahagia',
                 color :'#fb8805',
                 data: data.value_bar_tidakbahagia
               }
              ] 
          };

          // Line
          this.chartOptionsLine = {
            chart: {
              type: 'spline',
              backgroundColor:'#202940',
              plotBorderColor:'#000000'
           },
           title: {
              text: 'Line Klasifikasi Emosi',
              style :{ "color": "#ffffff", "fontSize": "18px" }
           },
           subtitle: {
              text: 'Source Map : Indonesia'
           },
           legend :{
              itemHiddenStyle : {"color": "#333333"},
              itemHoverStyle : {"color": "#333333"},
              itemStyle : {"color": "#cccccc", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis"}
           },
           xAxis: {
              gridLineColor:'#e6e6e6',
                categories: data.data_line
            },
           yAxis: {
                title: {
                    text: 'Persentase'
                }
            },
           plotOptions: {
              spline: {
                  marker: {
                      radius: 3,
                      lineColor: '#666666',
                      lineWidth: 0
                  }
              }
           },
           series: [
              {
                name: 'Data Emosi Bahagia',
                color : '#17aabc',
                lineWidth:3,
                type: "line",
                marker: {
                 symbol: 'round'
              },
                data: data.value_line_bahagia
              },
              {
                 name: 'Data Emosi Tidak Bahagia',
                 color :'#fb8805',
                 lineWidth:3,
                 type: "line",
                 marker: {
                    symbol: 'round'
                },
                 data: data.value_line_tidakbahagia
               }
           ]
          };

          // Pie
          this.chartOptionsPie = {
            chart : {
              plotShadow: false,
              backgroundColor:'#202940'
           },
           title : {
              text: 'Pie Klasifikasi Emosi',
              style :{ "color": "#ffffff", "fontSize": "18px" }  
           },
           subtitle:{
            text: 'Source Map : Indonesia'
          },
           tooltip : {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
           },
           plotOptions : {
              pie: {
                 allowPointSelect: true,
                 cursor: 'pointer',
                 borderWidth: 0,
           
                 dataLabels: {
                    enabled: false           
                 },
           
                 showInLegend: true
              }
           },
           legend :{
              itemHiddenStyle : {"color": "#333333"},
              itemHoverStyle : {"color": "#333333"},
              itemStyle : {"color": "#cccccc", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis"}
            },
           series : [{
              type: 'pie',
              name: 'Persentase',
              data: [
                 {
                    name: 'Data Emosi Bahagia',
                    color : '#17aabc',
                    y: data.value_pie_bahagia,
                    sliced: true,
                    selected: true
                 },
                 {
                    name: 'Data Emosi Tidak Bahagia',
                    color :'#fb8805',
                    y: data.value_pie_tidakbahagia,
                    sliced: true,
                    selected: true
                 }
              ]
           }]
          };

        // Maps Bahagia
        this.chartOptionsMapsBahagia = {
          chart: {
            map: indoMap,
            backgroundColor:'#202940'
          },
          title: {
            text: "Maps Emosi Bahagia",
            style :{ "color": "#ffffff", "fontSize": "18px" }
          },
          subtitle: {
            text:
              'Source map: Indonesia'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              alignTo: "spacingBox"
            }
          },
          legend: {
            enabled: true
          },
          colorAxis: {
             min: 0,
             minColor:'#202940',
             maxColor:'#17aabc',
             gridLineColor:'#202940',
             lineColor:'#202940'
          },
          series: [
            {
              type: "map",
              name: "Data Emosi Bahagia",
              states: {
                hover: {
                  color: "#00ffff"
                }
              },
              dataLabels: {
                enabled: false,
                format: "{point.name}"
              },
              allAreas: false,
              data: data.value_maps_bahagia
            }
          ]

        };

        // Maps Tidak Bahagia
        this.chartOptionsMapsTidakBahagia = {
          chart: {
            map: indoMap,
            backgroundColor:'#202940'
          },
          title: {
            text: "Maps Emosi Tidak Bahagia",
            style :{ "color": "#ffffff", "fontSize": "18px" }
          },
          subtitle: {
            text:
              'Source map: Indonesia'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              alignTo: "spacingBox"
            }
          },
          legend: {
            enabled: true
          },
          colorAxis: {
             min: 0,
             minColor:'#202940',
             maxColor:'#fb8805',
             gridLineColor:'#202940'
          },
          series: [
            {
              type: "map",
              name: "Data Emosi Tidak Bahagia",
              states: {
                hover: {
                   color: '#ffc100'
                }
              },
              dataLabels: {
                enabled: false,
                format: "{point.name}"
              },
              allAreas: false,
              data: data.value_maps_tidakbahagia
            }
          ]
        };

      this.loading = false;
      },
      () => { });
}

Highcharts: typeof Highcharts = Highcharts;
chartConstructor = "mapChart";
chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];

}
