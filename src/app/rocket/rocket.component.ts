import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SatelliteComponent } from './satellite/satellite.component';
import { RocketService } from '../shared/rocket.service';
import { Rocket } from '../shared/rocket.model';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  rocketList: Rocket[];
  constructor(private rocketService: RocketService,
              private dialog: MatDialog,
              private router: Router,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm();
    this.rocketService.getRocketList().subscribe(res => this.rocketList = res as Rocket[]);
  }

  resetForm(form?: NgForm) {
    if (form = null) {
    form.resetForm();
    }

    this.rocketService.formData = {
     Id: null,
     CreatedTime: new Date(),
     LastUpdatedTime: new Date(),
     CreatedBy: 1,
     LastUpdatedBy: 1,
     RocketNo: Math.floor(100 + Math.random() * 900),
     RocketName: '',
     Path: '',
     Destination: ''
    };
  }

  AddEditSatellite(ItemIndex, rocketId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {ItemIndex, rocketId};
    this.dialog.open(SatelliteComponent, dialogConfig).afterClosed().subscribe(res => {

    });
  }

  onSubmit(form: NgForm) {
    this.rocketService.saveUpdateRocket().subscribe(res => {
      this.resetForm();
      this.router.navigate(['/']);
    });
  }
}
