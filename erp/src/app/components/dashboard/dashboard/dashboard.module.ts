import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../dashboard-routing/dashboard-routing.module';
import { InvoicesComponent } from '../invoices/invoices.component';
import { MainComponent } from '../main/main.component';
import { ClientsComponent } from '../clients/clients.component';

@NgModule({
  declarations: [InvoicesComponent, MainComponent, ClientsComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
