import { Component, OnInit } from '@angular/core';
import { invoiceInfo, tableInfor } from 'src/app/constants/invoices.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  protected invoiceFormData!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.invoiceFormData = this.fb.group({
      client: ['', Validators.required],
      invoiceNumber: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
      ],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: ['', Validators.required],
      paymentStatus: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  invoiceForm() {
    this.openForm = true;
  }

  closeModal() {
    this.openForm = false;
  }

  onSubmit() {
    console.log('Profile tab', this.invoiceFormData.value);
    this.openForm = false;
    this.invoiceFormData.reset();
  }
}
