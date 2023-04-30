import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDialogComponent } from './my-dialog.component';

@NgModule({
  declarations: [
    MyDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyDialogComponent
  ]
})
export class MyDialogModule { }
