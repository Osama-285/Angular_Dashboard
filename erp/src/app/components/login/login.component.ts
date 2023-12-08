import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.get('email')?.hasError('required')) {
      this.loginForm.get('email')?.setErrors({ emailRequired: true });
    }

    if (this.loginForm.get('password')?.hasError('required')) {
      this.loginForm.get('password')?.setErrors({ passwordRequired: true });
    }

    if (this.loginForm.valid) {
      console.log('Form submitted', this.loginForm.value);
    }
  }
}
