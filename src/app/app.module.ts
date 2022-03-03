import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productservice.service';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonPartsModule } from './common/commonparts.module';
import { NotfoundComponent } from './notfound/notfound.component';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule,
    AppRoutingModule,
    ProductsModule,
    DashboardModule,
    CommonPartsModule,
  ],
  providers: [ProductService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
