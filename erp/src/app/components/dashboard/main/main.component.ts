import { Component } from '@angular/core';
import { admin } from 'src/app/constants/nav.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  infoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,})?\d{10}$/)],
      ],
    });
  }

  protected isModalOpen = false;
  adminNavBar = admin;
  name = 'Chris Hutto';
  email = 'chris@ws.com';

  profileTab() {
    console.log('Profile tab');
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
