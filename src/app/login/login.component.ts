// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  signIn() {
    // Implement your sign-in logic here
    const isSignInSuccessful = true;

    // console.log('Email:', this.email);
    // console.log('Password:', this.password);
    // You can add authentication logic here
    if (isSignInSuccessful) {
      this.router.navigate(['/admin']);
    }
  }
}
