import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { InvoicesComponent } from './components/dashboard/invoices/invoices.component';
import { ClientsComponent } from './components/dashboard/clients/clients.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { DashboardModule } from './components/dashboard/dashboard/dashboard.module';
import { HomeComponent } from './components/dashboard/home/home.component';
import { InventoryComponent } from './components/dashboard/inventory/inventory.component';
import { ProductComponent } from './components/dashboard/product/product.component';
import { ChatComponent } from './components/dashboard/chat/chat.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    InventoryComponent,
    ProductComponent,
    ChatComponent,
    SettingsComponent,
    // InvoicesComponent,
    // ClientsComponent,
    // MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
