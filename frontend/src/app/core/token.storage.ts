import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {
  jwtHelper: JwtHelperService = new JwtHelperService();
  isAdmin: boolean;
  accessToken: string;

  constructor() {
  }

  signOut() {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.clear();

    this.accessToken = null;
    this.isAdmin = false;
  }

  public saveToken(token: string) {
    this.accessToken = token;
    const decodedToken = this.jwtHelper.decodeToken(token);

    this.isAdmin = (decodedToken.scopes === "ROLE_ADMIN");

    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isAdminUser(): boolean {
    const token = this.getToken();
    if (token!== null) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.isAdmin = (decodedToken.scopes === "ROLE_ADMIN");

      return this.isAdmin;
    } else {
      return false;
    }
  }

  public isUser(): boolean {
    const token = this.getToken();
    if (token!== null) {
      const decodedToken = this.jwtHelper.decodeToken(token);

      return decodedToken.scopes === "ROLE_USER";
    } else {
      return false;
    }
  }
}
