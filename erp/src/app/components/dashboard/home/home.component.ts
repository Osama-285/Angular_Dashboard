import { Component } from '@angular/core';
import { axis, barHeights } from 'src/app/constants/graph.constants';
import { notifyData } from 'src/app/constants/notification.constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './homeBottom.component.css'],
})
export class HomeComponent {
  graphAxis = axis;
  heights = barHeights;
  totalRevenue = '150k';
  notifications = notifyData;

  barClick(i: number, content: string) {
    console.log(content, i);
  }
}
