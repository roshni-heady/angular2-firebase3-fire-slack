import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DatabaseService {
    public db: any;

    constructor() {
        this.db = firebase.database().ref('/');
    }
}
