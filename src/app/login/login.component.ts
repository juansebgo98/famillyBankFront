import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Models/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  loginForm: FormGroup = new FormGroup({});
  hide = true;

  constructor(private authService: AuthService, private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          //console.log('Logueado Correctamente!');
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log('Error al loguear!', error);
          // Mostrar mensaje de error en la interfaz de usuario
        }
      );
  }

  onSubmit(): void {
    if (this.loginForm && this.loginForm.valid) {
      this.username = this.loginForm.value.username;
      this.password = this.loginForm.value.password;
      this.login();
    }
  }
  
  
}
