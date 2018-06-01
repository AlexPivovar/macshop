import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SignUpService {
  public API = '//localhost:8080';
  public isUsernameAvailable: boolean = true;
  public isEmailAvailable: boolean = true;

  constructor(private http: HttpClient) {
  }

  public signup(user: User) {
    return this.http.post(this.API + '/checks/check-in', user);
  }

  public checkUsername(username: string): boolean {
    this.http.post(this.API + '/checks/check-username', username).subscribe(result => {
      this.isUsernameAvailable = <boolean> result;
    });

    return this.isUsernameAvailable;
  }

  public checkEmail(email: string) {
    this.http.post(this.API + '/checks/check-email', email).subscribe(result => {
      this.isEmailAvailable = <boolean> result;
    });

    return this.isEmailAvailable;
  }
}
