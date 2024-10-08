import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, User } from './pages/user.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }


  authenticate(login:Login):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.post<any>("https://localhost:44332/api/Users/authenticate",login,httpOptions)
    .pipe(catchError(error=>{
      alert(error.error);
      return throwError(()=> new  Error(''));
    })
  );
  }

  getByName(name:string):Observable<any>{
    return this.http.get<User>(`https://localhost:44332/api/Users/get_user_name/${name}`);
  }



  addUser(user:User):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.post<any>("https://localhost:44332/api/Users/add_user",user,httpOptions);
  }

  getDecodedToken(): any {
    const token = localStorage.getItem('Token');
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  getUserId(): string | null {
    const decodedToken = this.getDecodedToken();
    return decodedToken.id;
  }


  getUserName(): string | null {
    const decodedToken = this.getDecodedToken();
    return decodedToken.Username;
  }

  getAdmin():string|null{
    const decodedToken = this.getDecodedToken();
    return decodedToken.role;
  }

  isAdmin():boolean{
    return this.getAdmin() === 'Admin';
  }

}
