import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { HeaderModule } from 'src/app/core/header/header.module';


@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    HeaderModule
  ]
})
export class ArtistModule { }
