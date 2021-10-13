import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AreaComponent } from './particular_area_detail/area.component';
import { SelectalertComponent } from './selectalert/selectalert.component';


const routes: Routes = [

  {path:'',redirectTo:'alert',pathMatch:'full'},
    {path:'alert', component:SelectalertComponent},
    {path:'area/:data',component:AreaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
