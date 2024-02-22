import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from './Interfaces/user-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = false;
  public username: string = '';
  private apiUrl = environment.backend;
  private session = 'Session';

  constructor(private http: HttpClient, private router: Router){
    this.loggedIn = !!sessionStorage.getItem(this.session);
    const storedUsername = sessionStorage.getItem(this.session);
    if (storedUsername !== null) {
      this.username = storedUsername;
    }
  }

  login(username: string, password: string) {
    const body = {
      Username: username,
      Password: password
    }
    return this.http.post<User>(this.apiUrl + "Login/Login", body).subscribe(
      (response) => {
        const user = response as User; // Type assertion para informar ao TypeScript que o objeto é do tipo User
        if (user && user.id > 0) {
          this.loggedIn = true;
          this.username = user.name.split(' ')[0];
          sessionStorage.setItem(this.session, this.username.split(' ')[0]);
        } else {
          console.log('Usuário ou Senha inválidos');
          window.alert('Usuário ou senha inválidos!')
        }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }

  logout() {
    this.loggedIn = false;
    sessionStorage.removeItem(this.session);
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
