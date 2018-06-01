import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {TokenStorage} from "../../core/token.storage";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminAuthGuard implements CanActivate {
  public isAdmin: boolean = false;

  constructor(private router: Router, private tokenStorage: TokenStorage) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.isAdmin = this.tokenStorage.isAdminUser();

    if (this.isAdmin) {
      return true;
    } else if (this.tokenStorage.isUser()) {
      this.router.navigate(['/error']);
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
