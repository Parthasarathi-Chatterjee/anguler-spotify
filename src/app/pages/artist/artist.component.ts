import { Component, OnInit } from '@angular/core';
import { artist } from 'src/app/interface/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit  {

  public artist: artist[] = [];
  constructor() {
    this.artist = [
      {
        id: 1,
        name:"Sankar Mahadevan ",
        description: " Indian singer & composer",
        image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQPZuwilSObduekQBXSC7kqveDLrm2Rs2FrcveFSLJAbIC-CIwl516OmxmYJ-Wy05ztfh4J8G98IMm5bhw",
      }
    ]
  }


  ngOnInit(): void {
  
  }

}
