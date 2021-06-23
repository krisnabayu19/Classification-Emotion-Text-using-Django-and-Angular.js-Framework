import { Component, OnInit} from '@angular/core';
import { DataCheck, HasilCheck } from 'src/app/models/dashboard.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-checkemotion',
  templateUrl: './checkemotion.component.html',
  styleUrls: ['./checkemotion.component.scss']
})
export class CheckemotionComponent implements OnInit {

    // Declaration variable
    dataCheckEmotion: DataCheck = {
      text: ''
    };
  
    submitted = false;
    dataHasilCheck?: HasilCheck;

  constructor(private dashboardService: DashboardService) { }


  ngOnInit(): void {
    this.saveTutorial()
  }

  // Function save new data
  saveTutorial(): void {

    // Declaraton konstanta 
    const data = {
      text: this.dataCheckEmotion.text
    };

    // Script submit data after create
    this.dashboardService.cekData(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.retrieveDataCheck(); 
        },
        error => {
          console.log(error);
        });

  }

   // Default submit data, data is null
   newTutorial(): void {
    this.submitted = false;
    this.dataCheckEmotion = {
      text: ''
    };
  }

  retrieveDataCheck(): void{
    this.dashboardService.getCheck()
    .subscribe(
      data1 => {
        this.dataHasilCheck = data1;
        console.log(this.dataHasilCheck);
        return this.dataHasilCheck;
      },
      error => {
        console.log(error);
      });
  }
}
