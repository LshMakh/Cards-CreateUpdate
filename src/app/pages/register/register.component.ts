import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user: User = new User(0, '', '', '','');
  registerForm : FormGroup;

  router = inject(Router);
  private fb = inject(FormBuilder);
  
  constructor(private route: ActivatedRoute,private  authService: AuthService) {


    this.registerForm = this.fb.group({
      email:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })

  }

  onRegister(){
    if(this.registerForm.valid){
   
      this.user = this.registerForm.value;

      this.authService.getByName(this.user.username).subscribe(data=>{
        console.log(data);
        if(data === null){
          this.authService.addUser(this.user).subscribe(()=>{
            alert("registration successfull");
            this.router.navigateByUrl('login');
          });
        }
        else{
          alert("Username already exists!");
          this.registerForm.reset();
        }
      });
  
    }
}
}
