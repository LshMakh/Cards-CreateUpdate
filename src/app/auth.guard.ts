import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

router = inject(Router);
  canActivate(): boolean {
    const isCurrentUser = localStorage.getItem('Token');

    if (isCurrentUser) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}

