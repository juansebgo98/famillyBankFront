import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // el usuario está autenticado, puede acceder a la página
    } else {
      this.router.navigate(['/login']); // redirigir al usuario a la página de inicio de sesión
      return false;
    }
  }
}
