import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUserGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const returnLocalStorage = localStorage.getItem('logged');
    const returnLogged = JSON.parse(returnLocalStorage!);
    if (!returnLogged) {
      this.router.navigate(['/login']);
      return returnLogged;
    } else {
      return returnLogged;
    }
  }
}
