import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-hours',
  templateUrl: './service-hours.component.html',
  styleUrls: ['./service-hours.component.sass']
})
export class ServiceHoursComponent implements OnInit {

  constructor() { }

  primaryServiceText = `Sunday Worship Services`;
  primaryServiceTime = `Sundays at 10:30 AM (Central)`;
  specialServiceText = `Advent & Lent Season`;
  specialServiceTime = `Wednesdays at 7:00 PM (Central)`;
  
  ngOnInit(): void {
  }

}
