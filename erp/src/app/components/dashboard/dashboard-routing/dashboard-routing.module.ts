import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from '../invoices/invoices.component';
import { MainComponent } from '../main/main.component';
import { ClientsComponent } from '../clients/clients.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'invoices', component: InvoicesComponent },
      { path: 'clients', component: ClientsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
