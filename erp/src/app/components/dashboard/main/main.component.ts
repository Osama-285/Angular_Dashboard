import { Component, OnInit } from '@angular/core';
import { admin } from 'src/app/constants/nav.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './mainModal.component.css'],
})
export class MainComponent implements OnInit {
  infoForm!: FormGroup;
  protected isModalOpen = false;
  adminNavBar = admin;
  name = 'Chris Hutto';
  fName = 'Chris';
  lName = 'Hutto';
  email = 'chris@ws.com';
  phone = '+23688745';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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

  onSubmit() {
    console.log('Profile tab', this.infoForm.value);
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
    this.infoForm.reset({
      firstName: this.fName,
      lastName: this.lName,
      email: this.email,
      phone: this.phone,
    });
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
