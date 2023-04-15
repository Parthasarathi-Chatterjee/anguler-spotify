import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtistComponent } from './add-artist.component';

const routes: Routes = [{ path: '', component: AddArtistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddArtistRoutingModule { }
