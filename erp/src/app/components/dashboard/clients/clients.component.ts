import { Component } from '@angular/core';
import { clients } from 'src/app/constants/client.constants';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  protected clientsInfo = clients;
}
