import { Component, OnInit } from '@angular/core';
import { invoiceInfo, tableInfor } from 'src/app/constants/invoices.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
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

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

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
    this.invoiceFormData.reset();
  }

  onSubmit() {
    console.log('Profile tab', this.invoiceFormData.value);
    const formatDate = this.formatDate(this.invoiceFormData.value['dueDate']);
    console.log(formatDate);
    this.openForm = false;
    this.invoiceFormData.reset();
  }

  formatDate(date: Date): string | null {
    return this.datePipe.transform(date, 'dd MMMM, yyyy'); // Format the date
  }

  // Event handler for date change
  // onDateChange(event: MatDatepickerInputEvent<Date>): void {
  //   const selectedDate = event.value; // Get the selected date
  //   if (selectedDate) {
  //     const formattedDate = this.formatDate(selectedDate); // Format the selected date
  //     this.invoiceFormData.controls['dueDate'].setValue(formattedDate); // Set the formatted date in the form control
  //   }
  // }
}
