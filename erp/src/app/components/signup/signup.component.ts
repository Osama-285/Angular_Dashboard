import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  validForm = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    this.validForm = true;
    if (this.signupForm.get('email')?.hasError('required')) {
      this.signupForm.get('email')?.setErrors({ emailRequired: true });
    }
    if (this.signupForm.get('email')?.hasError('email')) {
      this.signupForm.get('email')?.setErrors({ emailformat: true });
    }
    if (this.signupForm.get('password')?.hasError('required')) {
      this.signupForm.get('password')?.setErrors({ passwordRequired: true });
    }
    if (this.signupForm.get('password')?.hasError('minlength')) {
      this.signupForm.get('password')?.setErrors({ passwordminlength: true });
    }
    if (this.signupForm.valid) {
      console.log('SignUp Form', this.signupForm.value);
    }
  }
}
