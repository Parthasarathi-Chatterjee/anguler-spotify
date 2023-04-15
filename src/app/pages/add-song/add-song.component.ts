import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SongListService } from 'src/app/services/song-list.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  productForm: FormGroup
  songlistservice: any;
  public songs: any = [];
  songtList: any
  productList!: any;
   status: boolean = false;
  error: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _songlistservice: SongListService) {

    this.productForm = this._formBuilder.group({
      songName: ['', Validators.required],
      artistName: ['', Validators.required],
      category: ['', Validators.required],
      relizeDate: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this._songlistservice.getSongs().subscribe((res: any) => {
      console.log(res);
      this.songs = res;
    })
  }
  onSubmit() {
    this._songlistservice.setsong(this.productForm.value)
    this.productForm.reset() 
    




  }
  deleteProduct(productindex: number): void{
    //console.log(productindex)
    let songListStr =  this.songs
    if(songListStr){
    
       this.productList = songListStr;
     //  console.log(this.productList);
       let newProductList: any[] =[]
       for (let index=0; index < this.productList.length; index++) {
         if(productindex != index)
          newProductList.push(this.productList[index]);
          console.log(this.productList[index]);
       }
       this.productList = newProductList;
       songListStr = this.productList;
     // this._songlistservice.setsong(songListStr);
       
    }

  }
}