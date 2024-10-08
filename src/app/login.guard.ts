import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isCurrentUser = localStorage.getItem('Token'); // Check if the token exists

    if (isCurrentUser) {
      // If a token is found (i.e., the user is logged in), redirect to the main page
      this.router.navigate(['/main']);
      return false; // Prevent access to the login/register page
    }
    return true; // Allow access to login/register page if no token is found
  }
}
