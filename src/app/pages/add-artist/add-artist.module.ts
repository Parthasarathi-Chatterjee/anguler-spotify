import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddArtistRoutingModule } from './add-artist-routing.module';
import { AddArtistComponent } from './add-artist.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AddArtistComponent
  ],
  imports: [
    CommonModule,
    AddArtistRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule


  ]
})
export class AddArtistModule { }
