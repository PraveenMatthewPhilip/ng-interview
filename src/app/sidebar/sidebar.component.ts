import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  signedin = false;
  signInDialog = false;
  menuOptions = [
    {
      name: 'Dashboard',
      icon: 'pi pi-chart-line',
      count: 0,
      link: '/',
    },
    {
      name: 'Products',
      icon: 'pi pi-book',
      count: 0,
      link: '/products',
    },
    {
      name: 'Users',
      icon: 'pi pi-user',
      count: 0,
      link: '/users',
    },
  ];

  closeSignIn(signInFlag) {
    console.log('Sign In Flag', signInFlag);
    this.signInDialog = !signInFlag;
    this.signedin = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
