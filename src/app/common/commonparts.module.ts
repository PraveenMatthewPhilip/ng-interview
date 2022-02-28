import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [InfoCardComponent],
  imports: [CommonModule],
  exports: [InfoCardComponent],
})
export class CommonPartsModule {}
