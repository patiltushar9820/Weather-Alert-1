import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Areas } from '../models/area.model';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaserviceService {
  constructor(private http:HttpClient) { }
  getArea(): Observable<Areas[]> {
    const url_area = `${environment.api_area}`;

    return this.http.get<any>(url_area)
    .pipe(map(data => {
      return data.areas
    }));                         
  }  
}   
/* return this.http.get<any>(url_area)
  .pipe(map(data => {                                                                                   }                                                                                      return data.areas.map(x => {
     return new Areas({ area_name: x });
      });
 */
  

