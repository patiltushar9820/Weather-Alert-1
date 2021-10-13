import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertType } from '../core/models/alert-type.model';
import { Areas } from '../core/models/area.model';
import { AreaserviceService } from '../core/services/areaservice.service';
import { ParticularAreaServiceService } from '../core/services/particular-area-service.service';
import { particularAreaDetail } from '../core/models/particularArea.model';
import { WeatherServices } from '../core/services/weather.services';

@Component({
  selector: 'app-selectalert',
  templateUrl: './selectalert.component.html',
  styleUrls: ['./selectalert.component.scss']
})
export class SelectalertComponent implements OnInit {
  title = 'interview-app';

  alertTypes: AlertType[];
  //areas array
  alertArea: Areas[];

  api_addr: string;

  particularAreaDetail: particularAreaDetail[];

  particular_area: string;

  data: string;

  area: Array<string>;
  
  alerttype: string;
  
  constructor(
    private weatherServices: WeatherServices,
    private areaServices:AreaserviceService,
    private router:Router) {
  }

  public ngOnInit() {
  
    this.weatherServices.getAlertTypes().subscribe(res => {
      this.alertTypes = res;
     // console.log(this.alertTypes)
     
    this.areaServices.getArea().subscribe(res_area => {
        this.alertArea= res_area;
        this.area= Object.keys(this.alertArea);
        console.log(" Alert Final ",this.alertArea);
    })
    });
  }
  
  onEventSelector(event ) {
    this.alerttype=event.value;
  }

  onItemSelector(value : string) {
    this.data=value+"-"+this.alerttype;
      if(this.alerttype=== undefined ) {
        
        alert("please select alert type !!")
      } else if(this.data=== undefined) {
       
        alert("please select area !!")
      }else {
        this.router.navigate(['area',this.data])
      }
  }
}
  