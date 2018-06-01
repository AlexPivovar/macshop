import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../../../core/token.storage";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) { }

  ngOnInit() {
  }

  signIn(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['/catalog']);
      }
    );
  }

}
