import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit  {
  router = inject(Router);

  userName: string |null= null;
  constructor(public authService:AuthService){}

  ngOnInit() {

  //   const isCurrentUser = localStorage.getItem('currentUser');  
  //   if (isCurrentUser != null) {
  //     this.currentUser = JSON.parse(isCurrentUser);  
  //   }

  this.userName = this.authService.getUserName();
  console.log(this.userName);
  console.log(this.authService.getDecodedToken());




    


  }

  onLogout() {
    
    localStorage.removeItem('Token');
    this.router.navigateByUrl('login'); 
  }
}

