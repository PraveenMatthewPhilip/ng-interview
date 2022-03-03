import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import 'core-js/features/reflect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'ng-interview';
  name = 'Praveen';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
