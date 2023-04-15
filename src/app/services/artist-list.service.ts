import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {

  public artistnameList: any = []
  
  public artistList = new BehaviorSubject<any>(this.artistnameList);
  constructor() { }
  getArtist() {
    return this.artistList.asObservable();
    
  }
  setArtist(artist: any) {
    this.artistnameList.push(artist);
    this.artistList.next(this.artistnameList);
  }
}
