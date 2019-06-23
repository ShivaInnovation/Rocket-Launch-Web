import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketComponent } from './rocket/rocket.component';
import { SatelliteComponent } from './rocket/satellite/satellite.component';



const routes: Routes = [
  {path: '', redirectTo: 'Rocket', pathMatch: 'full'},
  {path: 'Rocket', component: RocketComponent},
  {path: 'Satellite', component: SatelliteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
