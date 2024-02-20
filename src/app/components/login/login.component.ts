import { NgForm } from '@angular/forms';
import { AuthService } from '../../utils/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(public authService: AuthService) { }

  onSubmit(form: NgForm): void {
    const username = form.value.username;
    const password = form.value.password;
    console.log('onSubmit called');
    console.log('username:', username);
    console.log('password:', password);
    this.login(username, password)
  }

  login(username: string, password: string) {
    this.authService.login(username, password);
  }

  logout(){
    this.authService.logout();
  }

}
