import { Component, OnInit } from '@angular/core';
import { dateService } from '../services/dateService';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.sass']
})
export class CheckInComponent implements OnInit {

  constructor(
  ) { }
  dateService = new dateService;

  checkInHeader = `Service Sign In For `;

  ngOnInit(): void {
    this.checkInHeader += `${this.dateService.weekDay}, ${this.dateService.dateMDY}`;
  }

}
