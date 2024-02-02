import { Component } from '@angular/core';
import { invoiceInfo, tableInfor } from 'src/app/constants/invoices.constants';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css', './invoicesTable.component.css'],
})
export class InvoicesComponent {
  colors = ['color1', 'color2', 'color3', 'color4'];
  protected invoices = invoiceInfo;
  protected invoiceInformation = tableInfor;
  openForm = false;

  invoiceForm() {
    this.openForm = true;
    console.log('CLICK');
  }

  closeModal() {
    this.openForm = false;
  }
}
