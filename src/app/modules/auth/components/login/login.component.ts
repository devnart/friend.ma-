import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import * as firebaseui from 'firebaseui';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  ui: firebaseui.auth.AuthUI;

  constructor(private fb: FormBuilder,public authService: AuthService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // this.authService.afAuth.app.then(app => {

    //   const uiConfig = {
    //     signInOptions: [
    //       EmailAuthProvider.PROVIDER_ID,
    //       GoogleAuthProvider.PROVIDER_ID,
    //     ],
    //     callbacks: {
    //       SignInSuccessWithAuthResult: ();
    //     }
    //   }
    // });

  }

  onSubmit(form: FormGroup) {
    console.log('Email :' + form.value.email);
    console.log('Password' + form.value.password);
  }

}
