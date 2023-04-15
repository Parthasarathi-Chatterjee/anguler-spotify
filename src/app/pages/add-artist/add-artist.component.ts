import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistListService } from 'src/app/services/artist-list.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {
  artistForm: FormGroup
  ArtistListService: any;
  public artist: any = [];
  songtList: any
  productList!: any;
   status: boolean = false;
  error: boolean = false;
  constructor(private _formBuilder: FormBuilder, private _artistlistservice: ArtistListService) {
  
  this.artistForm = this._formBuilder.group({
    artistName: ['', Validators.required],
    Place: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
  })

}

  ngOnInit(): void {
  this._artistlistservice.getArtist().subscribe((res:any) => {
    
    this.artist = res;
    console.log(this.artist);
  })
  }
  onSubmit(){
    this._artistlistservice.setArtist(this.artistForm.value)

  }

  deleteProduct(priductIndex:number){

  }
} 