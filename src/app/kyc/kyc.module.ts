import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {
  Box1Component
} from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TableComponent } from './table/table.component';
import { Box3Component } from './box3/box3.component';
import { UploadComponent } from './upload/upload.component';
import { Box4Component } from './box4/box4.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    Box1Component,
    Box2Component,
    Box3Component,
    DatePickerComponent,
    TableComponent,
    UploadComponent,
    Box4Component,
    InputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    Box1Component,
    Box2Component,
    Box3Component,
    DatePickerComponent,
    TableComponent,
    UploadComponent,
    Box4Component,
    InputComponent
  ]
})
export class KycModule { }
