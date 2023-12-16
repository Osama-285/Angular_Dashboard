import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../dashboard-routing/dashboard-routing.module';
import { InvoicesComponent } from '../invoices/invoices.component';
import { MainComponent } from '../main/main.component';
import { ClientsComponent } from '../clients/clients.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { ChatComponent } from '../chat/chat.component';
import { SettingsComponent } from '../settings/settings.component';
@NgModule({
  declarations: [
    InvoicesComponent,
    MainComponent,
    ClientsComponent,
    InventoryComponent,
    HomeComponent,
    ProductComponent,
    ChatComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
