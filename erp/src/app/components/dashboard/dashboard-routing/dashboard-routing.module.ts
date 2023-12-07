import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from '../invoices/invoices.component';
import { MainComponent } from '../main/main.component';
import { ClientsComponent } from '../clients/clients.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { ChatComponent } from '../chat/chat.component';
import { SettingsComponent } from '../settings/settings.component';
import { InventoryComponent } from '../inventory/inventory.component';
const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'product', component: ProductComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
