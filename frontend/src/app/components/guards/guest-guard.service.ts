import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {TokenStorage} from "../../core/token.storage";

@Injectable()
export class GuestGuard implements CanActivate {
  public isGuest: boolean = false;

  constructor(private router: Router, private tokenStorage: TokenStorage) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.isGuest = this.tokenStorage.getToken() === null;

    return this.isGuest;
  }

}
