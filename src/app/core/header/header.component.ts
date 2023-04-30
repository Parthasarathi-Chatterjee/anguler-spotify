import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MyDialogComponent } from 'src/app/my-dialog/my-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog,private _authService: AuthService) {

  }
  ngOnInit(): void {
    console.log("test1")
    this._authService.getLiginStatus().subscribe(loginStatus => {
      console.log("loginStatus - ", loginStatus);
    })
    console.log("test2")
  }

  openDialog() {
    console.log("test");
    this.dialog.open(MyDialogComponent);
  }


}
