import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ParticularAreaServiceService } from '../core/services/particular-area-service.service';
import { particularAreaDetail } from '../core/models/particularArea.model';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  particularareaDetail: particularAreaDetail[];

  particularareaDetailFilter: particularAreaDetail[];

  areadetail: Array<string>;

  event_count: number;
  
  alert_area: Array<string>;

  particulararea: string;

  displayedColumns: string[] = ['areaDesc', 'affectedZones'];
  
  selected_alert: string;

  selected_alert_count: number;
 
  events: string;
  
  isLoading: boolean= true;

  constructor (
    private particularAreaServices: ParticularAreaServiceService , 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.particulararea = this.route.snapshot.params['data'];

    this.alert_area=this.particulararea.split("-")
    
    //this.particularAreaServices.getUser(username).then(user => this.user = user);
    console.log("particular area : ",this.alert_area[0]);
    console.log("particular alert :",this.alert_area[1]);

    this.selected_alert=this.alert_area[1]
    this.particularAreaServices.getAreaDetail(this.alert_area[0]).subscribe(res => {
    this.isLoading=false;
    this.particularareaDetail = res["features"];

     // this.particularareaDetail=[];
    console.log("All Data: ",this.particularareaDetail)

      //here i filter out data of the only selected alert
    this.particularareaDetailFilter= []
    for(let i12 of this.particularareaDetail) {
      
      this.events= i12["properties"].event;
      
      if(this.selected_alert == this.events) {
            console.log("event values :",this.events)
            this.particularareaDetailFilter.push(i12)
          } 
      }
      console.log("second data: ", this.particularareaDetailFilter)
      this.selected_alert_count= this.particularareaDetailFilter.length
        
      if( this.selected_alert_count <= 0) {
        alert("selected alert type not found in your selected area !! Sorry")
      }
    }, 
    error => this.isLoading = false
    )
  }
}
