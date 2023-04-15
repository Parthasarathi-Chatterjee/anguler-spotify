import { Component, OnInit } from '@angular/core';
import { song } from 'src/app/interface/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  public songs: song[] = [];

  constructor() {
    this.songs = [
      {
        id: 1,
        name:"Dil Chaata ha",
        description: "Dil Chahta Hai is a hindi song released in 2001.",
        catagory: "Hindi Song",
        image: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      }
    ]
  }




  ngOnInit(): void {

  }
}




