import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // loginStatus: boolean = false;
  public loginStatus = new BehaviorSubject<boolean>(false);
  constructor() { }

  getLiginStatus(): Observable<boolean> {
    let loginStatus: string|null = localStorage.getItem("login_status")
    if(loginStatus) {
      let loginStatusObj: {login_status: boolean} = JSON.parse(loginStatus)
      this.loginStatus.next(loginStatusObj.login_status)
    }
    return this.loginStatus.asObservable();
  }

  changeLoginStatus(loginStatus: boolean): void {
    localStorage.setItem("login_status", JSON.stringify({ login_status: loginStatus }));
    this.loginStatus.next(loginStatus);
  }

}
