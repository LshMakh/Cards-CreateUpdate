import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string | null = localStorage.getItem("Token");
        let request: HttpRequest<any>;

        if (token) {
            request = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                })
            });
        } else {
            request = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && this.router.url !== "/login") {
                    this.router.navigate(['/login']);
                } else {
                    alert(error.message || 'An error occurred');
                }
                return throwError(() => new Error(error.message));
            })
        );
    }
}
