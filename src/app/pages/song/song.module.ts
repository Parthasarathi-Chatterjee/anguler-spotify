import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { SongComponent } from './song.component';
import { HeaderModule } from 'src/app/core/header/header.module';


@NgModule({
  declarations: [
    SongComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    HeaderModule
  ]
})
export class SongModule { }
