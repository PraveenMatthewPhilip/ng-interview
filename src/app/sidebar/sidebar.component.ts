import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuOptions = [
    {
      name: 'Dashboard',
      icon: 'pi pi-chart-line',
      count: 0,
    },
    {
      name: 'Products',
      icon: 'pi pi-book',
      count: 0,
    },
    {
      name: 'Users',
      icon: 'pi pi-user',
      count: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
