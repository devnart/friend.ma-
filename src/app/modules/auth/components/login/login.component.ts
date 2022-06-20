import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import * as firebaseui from 'firebaseui';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  ui: firebaseui.auth.AuthUI;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.authService.afAuth.app.then(app => {
      const uiConfig = {
        signInFlow: 'popup',
        // signInSuccessUrl: '/',
        signInOptions: [
          GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: this.onLoginSuccess.bind(this)
        }
      }

      this.ui = new firebaseui.auth.AuthUI(app.auth());
      this.ui.start('#google-auth-container', uiConfig);
    })
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // this.authService.afAuth.app.then(app => {


  }

  onSubmit(form: FormGroup) {
    console.log('Email :' + form.value.email);
    console.log('Password' + form.value.password);
  }

  onLoginSuccess(result: any) {

    result.user.getIdToken().then((token: string) => {
      localStorage.setItem('token', token);
    })

    console.log(result.additionalUserInfo.profile);
    localStorage.setItem('user', JSON.stringify(result.additionalUserInfo.profile));
    localStorage.setItem('userId', result.user.uid);
    this.router.navigate(['/']);
    return true;
  }

  ngOnDestroy() {
    this.ui.delete();
  }
}
