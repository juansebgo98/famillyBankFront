import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  autenticado = false;

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/signin`, { username, password })
      .pipe(
        map(response => {
          // login successful if there's a jwt token in the response
          if (response && response.token) {
            // store jwt token in cookie to keep user logged in between page refreshes
            this.cookieService.set('famillyBank', response.token);
            this.autenticado = true;
            return this.autenticado;
          } else {
            return this.autenticado;
          }
        })
      );
  }  

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/signout`, {}).pipe(
      map((response: any) => {
        this.cookieService.delete('famillyBank');
        return response;
      })
    );
  }

  isLoggedIn(): boolean {
    // check if user is logged in by checking if there's a token in cookie
    const token = this.cookieService.get('famillyBank');
    return !!token;
  }

}
