import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'login',
    template: `
      <h3>Login to see some stuff using these creds:</h3>
    <dl>
      <dt>Email:</dt>
      <dd>cave@aperture.com</dd>
      <dt>Password:</dt>
      <dd>notneverbutnow</dd>
    </dl>
    <form (ngSubmit)="login()">
      <label for="username">Email</label><br/>
      <input type="email" required
        [(ngModel)]="username" >
      <br/>
      <label for="password">Password</label><br/>
      <input type="password" required
        [(ngModel)]="password" >
      <hr/>
      <button type="submit">Login!</button>
    </form>
  `,
    providers: [AuthService]
})
export class LoginComponent {
    username: String;
    password: String;
    constructor(private _auth: AuthService) {}

      public login() {
        this._auth.login(this.username, this.password)
      }
}
