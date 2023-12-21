import { Component } from '@angular/core';
import { axis } from 'src/app/constants/graph.constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './homeBottom.component.css'],
})
export class HomeComponent {
  graphAxis = axis;
}
