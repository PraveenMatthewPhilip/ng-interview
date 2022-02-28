import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  cards = [
    {
      number: 2340,
      text: 'New products this week',
      pecentage: 14.6,
      icon: 'pi pi-arrow-up',
    },
    {
      number: 2340,
      text: 'New products this week',
      pecentage: 14.6,
      icon: 'pi pi-arrow-down',
    },
    {
      number: 2340,
      text: 'New products this week',
      pecentage: 14.6,
      icon: 'pi pi-arrow-up',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
