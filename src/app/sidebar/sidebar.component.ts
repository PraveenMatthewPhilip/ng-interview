import { Component, OnInit } from '@angular/core';
import {
  faChartLine,
  faUser,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuOptions = [
    {
      id: 0,
      name: 'Dashboard',
      icon: faChartLine,
      pill: '',
      link: '/',
    },
    {
      id: 0,
      name: 'Users',
      icon: faUser,
      pill: '',
      link: '/users',
    },
    {
      id: 0,
      name: 'Products',
      icon: faBriefcase,
      pill: 'Todo',
      link: 'products',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
