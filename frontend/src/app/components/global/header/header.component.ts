import {Component, OnInit} from '@angular/core';
import {TokenStorage} from "../../../core/token.storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private tokenStorage: TokenStorage) {
  }

  ngOnInit() {
  }

  public isAdmin(): boolean {
    return this.tokenStorage.isAdminUser();
  }

  public isUser(): boolean {
    return this.tokenStorage.isUser();
  }

  public isAuthenticated(): boolean {
    return this.tokenStorage.isUser() || this.tokenStorage.isAdminUser();
  }

  public logOut(){
    this.tokenStorage.signOut();
    this.router.navigate(['/catalog']);
  }
}
