import { Injectable } from '@angular/core';
import { GoogleAuthProvider, User } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseApp } from '@angular/fire/compat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user: any;
  constructor(public afAuth: AngularFireAuth, private http: HttpClient, private firebase: FirebaseApp) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.user.getIdToken().then((token:string) => {
          localStorage.setItem('token', token);
        })
      }
    })
  }

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

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getUserData() {
    return [
      {
        id: this.user.uid,
        email: this.user.email,
        displayName: this.user.displayName,
        photoURL: this.user.photoURL,
      }
    ]
  }
}
