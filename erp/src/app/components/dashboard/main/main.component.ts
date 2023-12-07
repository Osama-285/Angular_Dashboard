import { Component } from '@angular/core';
import { admin } from 'src/app/constants/nav.constant';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  adminNavBar = admin;
}
