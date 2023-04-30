import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './core/log-in/log-in.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LogInComponent
  },
  { path: 'artist', loadChildren: () => import('./pages/artist/artist.module').then(m => m.ArtistModule) },
  { path: 'song', loadChildren: () => import('./pages/song/song.module').then(m => m.SongModule),
    canActivate: [AuthGuard]
  },
  { path: 'AddSong', loadChildren: () => import('./pages/add-song/add-song.module').then(m => m.AddSongModule) },
  { path: 'add-artist', loadChildren: () => import('./pages/add-artist/add-artist.module').then(m => m.AddArtistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
