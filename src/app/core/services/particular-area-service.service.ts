import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { particularAreaDetail } from '../models/particularArea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ParticularAreaServiceService {

  constructor(private http: HttpClient) { }
  getAreaDetail(area: string): Observable<particularAreaDetail[]> {
    const url_area = `${environment.particular_area_api + area}`;

    console.log(url_area);

    return this.http.get<any>(url_area)
    .pipe(map(data=> {
        return data  
    }));
  }
}
