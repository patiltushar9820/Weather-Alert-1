import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { WeatherServices } from './core/services/weather.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaserviceService } from './core/services/areaservice.service';
import { AreaComponent } from './particular_area_detail/area.component';
import { ParticularAreaServiceService } from './core/services/particular-area-service.service';
import { RouterModule } from '@angular/router';
import { SelectalertComponent } from './selectalert/selectalert.component';

import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatGridListModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material'
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    SelectalertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
   
  ],
  providers: [
    WeatherServices,
    AreaserviceService,
    ParticularAreaServiceService
   
  ],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
