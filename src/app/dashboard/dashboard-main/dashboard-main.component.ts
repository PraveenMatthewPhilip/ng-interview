import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
})
export class DashboardMainComponent implements OnInit {
  cards = [
    {
      number: Math.floor(Math.random() * 15000),
      text: 'Sales this week',
      pecentage: Math.floor(Math.random() * 100),
      icon: ['pi pi-arrow-up', 'pi pi-arrow-down'][
        Math.floor(Math.random() * 2)
      ],
    },
    {
      number: Math.floor(Math.random() * 1500),
      text: 'Returns this week',
      pecentage: Math.floor(Math.random() * 100),
      icon: ['pi pi-arrow-up', 'pi pi-arrow-down'][
        Math.floor(Math.random() * 2)
      ],
    },
    {
      number: Math.floor(Math.random() * 20),
      text: 'Top products this week',
      pecentage: Math.floor(Math.random() * 10),
      icon: ['pi pi-arrow-up', 'pi pi-arrow-down'][
        Math.floor(Math.random() * 2)
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
