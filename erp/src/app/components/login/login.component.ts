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
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passowrd: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted', this.loginForm.value);
    }
  }
}
