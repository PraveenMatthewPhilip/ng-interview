import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductService } from './productservice.service';

import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { CommonPartsModule } from './common/commonparts.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    OrderListModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    ProductsModule,
    DashboardModule,
    RippleModule,
    CommonPartsModule,
  ],
  providers: [ProductService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
