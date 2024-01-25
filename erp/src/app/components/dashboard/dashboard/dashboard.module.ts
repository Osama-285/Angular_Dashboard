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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolTipDirective } from 'src/app/directives/tool-tip.directive';
import { NgxPaginationModule } from 'ngx-pagination';
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
    ToolTipDirective,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class DashboardModule {}
