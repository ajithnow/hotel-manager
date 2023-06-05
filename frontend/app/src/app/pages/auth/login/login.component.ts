import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get isUsernameInvalid(): boolean {
    const usernameControl = this.loginForm.get('username');
    return !!usernameControl && (usernameControl.invalid && (usernameControl.dirty || usernameControl.touched));
  }
  
  get isUsernameEmailInvalid(): boolean {
    const usernameControl = this.loginForm.get('username');
    return !!usernameControl && (usernameControl.hasError('email') && (usernameControl.dirty || usernameControl.touched));
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      // Handle form validation errors
      return;
    }

    // Process the login form
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Perform login logic here
  }
}
