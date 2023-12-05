import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from '../invoices/invoices.component';
import { MainComponent } from '../main/main.component';
import { ClientsComponent } from '../clients/clients.component';

const routes: Routes = [
  { path: 'dashboard', component: MainComponent },
  { path: 'dashboard/invoices', component: InvoicesComponent },
  { path: 'dashboard/clients', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
