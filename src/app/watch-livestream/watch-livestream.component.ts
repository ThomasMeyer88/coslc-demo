import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-livestream',
  templateUrl: './watch-livestream.component.html',
  styleUrls: ['./watch-livestream.component.sass']
})
export class WatchLivestreamComponent implements OnInit {

  constructor() { }

  watchHeaderText = `Video Stream`;

  primaryServiceText = `Sunday Worship Services`;
  primaryServiceTime = `Sundays at 10:30 AM (Central)`;
  specialServiceText = `Advent & Lent Season`;
  specialServiceTime = `Wednesdays at 7:00 PM (Central)`;

  interactHeaderText = `Interact`;
  interactURL = `<a href="https://www.facebook.com/Christ-Our-Savior-Lutheran-Church-and-Early-Childhood-Education-Center-111774136855221">Facebook Page</a>`
  interactText = `If you would like to interact with the church congregation during live services, please send us a direct message on our ${this.interactURL} to request details for the Zoom meeting ID.`;
  ngOnInit(): void {
  }

}
