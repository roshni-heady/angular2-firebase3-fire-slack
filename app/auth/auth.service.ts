import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    public auth: any;
    constructor() {
        this.auth = firebase.auth();
    }

    public login(userEmail: string, userPassword: string) {
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(userEmail, userPassword).then(userData => resolve(userData), err => reject(err));
    });
  }
}
