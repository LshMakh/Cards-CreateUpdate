import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AuthService } from '../../auth.service';
import { Login } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm : FormGroup;

  router = inject(Router);

  private fb = inject(FormBuilder); 

  constructor(private authService:AuthService) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]], 
      email:['',[Validators.required]],
      password: ['', [Validators.required]] 
    });
  }
 
  onLogin() {

    if (this.loginForm.valid) {
      let login:Login = this.loginForm.value; 
      this.authService.authenticate(login).subscribe(res=>{
        console.log(res.accessToken);
        localStorage.setItem("Token",res.accessToken);
        this.router.navigateByUrl('main'); 
        
      })
    } else alert("Enter the Username and Password!")
    
  }
}


 

