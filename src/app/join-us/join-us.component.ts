import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.sass']
})
export class JoinUsComponent implements OnInit {

  constructor() { }

  joinUsHeader = `Join Us`;
  joinUsText = `At Christ Our Savior we have a passion for living, sharing, and teaching the love of Christ with all people. We invite everyone in the San Antonio and surrounding areas to come and worship with us. We invite you to join us in person at our church sanctuary every Sunday at 10:30 AM.`;
  serviceHoursHeader = `Service Hours`;
  directionsHeader = `Directions`;
  dirChurchName = `Christ Our Savior Lutheran Church`;
  dirAdLn1 = `5323 Blanco Road`;
  dirAdLn2 = `San Antonio, TX 78216`;
  phone = ` 210-732-7223`;
  fax = ` 210-732-9288`;
  email = ` admin@coslc.org`;
  web = ` coslc.org`;
  ngOnInit(): void {
  }

}
