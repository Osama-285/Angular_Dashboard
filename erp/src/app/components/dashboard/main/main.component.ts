import { Component } from '@angular/core';
import { admin } from 'src/app/constants/nav.constant';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
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
