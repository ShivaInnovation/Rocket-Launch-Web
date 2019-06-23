import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketComponent } from './rocket/rocket.component';

import { SatelliteComponent } from './rocket/satellite/satellite.component';
import { RocketService } from './shared/rocket.service';
import { HttpClientModule} from '@angular/common/http';
import { RocketListComponent } from './rocket/rocket-list/rocket-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RocketComponent,
    SatelliteComponent,
    RocketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [RocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
