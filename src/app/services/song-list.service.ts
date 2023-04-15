import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  public songItemList: any = []
  
  
  public songList = new BehaviorSubject<any>(this.songItemList);

  constructor() { }
  getSongs() {
    return this.songList.asObservable();
    
  }
  setsong(song: any) {
    this.songItemList.push(song);
    this.songList.next(this.songItemList);
  }
}