import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = false;
  public username: string = '';

  login(username: string, password: string) {
    this.username = username;
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
