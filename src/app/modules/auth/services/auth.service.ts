import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseApp } from '@angular/fire/compat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private http: HttpClient, private firebase:FirebaseApp) {}

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: firebase.auth.AuthProvider | GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Successfully logged in with popup.");
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
