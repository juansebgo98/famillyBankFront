import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Categoria } from '../Models/Entity/categoria';
import { CookieService } from 'ngx-cookie-service';
import { Constants } from 'src/app/Utils/constantes';

@Injectable({
    providedIn: 'root'
  })
  export class CategoriaService {
  
    private headers = new HttpHeaders({'Content-Type': 'application/json'});


    constructor(private http: HttpClient,private cookieService: CookieService) { }
  
    obtenerTodasCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(Constants.API_URL_CATEGORIA,{ headers: this.headers, withCredentials: true }).pipe(
          catchError(this.handleError)
        );
        
    }
  
    obtenerCategoriaById(id: number): Observable<Categoria> {
      return this.http.get<Categoria>(Constants.API_URL_CATEGORIA+`/${id}`,{ headers: this.headers, withCredentials: true });
    }
  
    crearCategoria(categoria: Categoria): Observable<Categoria> {
      return this.http.post<Categoria>(Constants.API_URL_CATEGORIA, categoria,{ headers: this.headers, withCredentials: true });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 401) {
            this.cookieService.delete('famillyBank');
        }
        return throwError('Algo ha salido mal.');
        }

  }