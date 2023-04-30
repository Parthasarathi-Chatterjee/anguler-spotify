import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  productForm: FormGroup;
  public isLoggin: any[] = []

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {
    this.productForm = this._formBuilder.group({
      name: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  ngOnInit(): void { }

  signUp(): void {
    if(this.productForm.invalid)
      return

    this._authService.changeLoginStatus(true);
    this.router.navigate(['/song'])
  }

}
