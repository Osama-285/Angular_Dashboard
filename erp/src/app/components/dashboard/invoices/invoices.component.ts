import { Component } from '@angular/core';
import { invoiceInfo } from 'src/app/constants/invoices.constants';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent {
  colors = ['color1', 'color2', 'color3', 'color4'];
  protected invoices = invoiceInfo;
}
