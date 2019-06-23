import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Satellite } from 'src/app/shared/satellite.model';
import { Category } from 'src/app/shared/category.model';
import { CategoryService } from 'src/app/shared/category.service';
import { NgForm } from '@angular/forms';
import { RocketService } from 'src/app/shared/rocket.service';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.css']
})
export class SatelliteComponent implements OnInit {
formdata: Satellite;
categoryList: Category[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<SatelliteComponent>, private categoryService: CategoryService, private rocketService: RocketService) { }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(res => this.categoryList = res as Category[]);
    if (this.data.ItemIndex == null) {
    this.formdata = {
      Id: null,
      CreatedTime: new Date(),
      LastUpdatedTime: new Date(),
      CreatedBy: 1,
      LastUpdatedBy: 1,
      SatelliteNo: Math.floor(100 + Math.random() * 900),
      SatelliteName: '',
      Category: '',
      Description: '',
      RocketId: this.data.RocketId
    };
  } else {
    this.formdata = Object.assign({}, this.rocketService.satellites[this.data.ItemIndex]);
  }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.data.ItemIndex == null) {
      this.rocketService.satellites.push(form.value);
    } else {
      this.rocketService.satellites[this.data.ItemIndex] = form.value;
      this.dialogRef.close();
    }
  }
}
