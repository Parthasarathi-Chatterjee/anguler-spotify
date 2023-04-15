import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSongRoutingModule } from './add-song-routing.module';
import { AddSongComponent } from './add-song.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AddSongComponent
  ],
  imports: [
    CommonModule,
    AddSongRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule
    
  ]
})
export class AddSongModule { }
