import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card/info-card.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [InfoCardComponent, SignInComponent, SignInComponent],
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
  ],
  exports: [InfoCardComponent, SignInComponent],
})
export class CommonPartsModule {}
