import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-devotions',
  templateUrl: './daily-devotions.component.html',
  styleUrls: ['./daily-devotions.component.sass']
})
export class DailyDevotionsComponent implements OnInit {

  constructor() { }
  
  dailyDevHeader = `Daily Devotions`;

  dailyDevText = `We invite you to listen to Daily Devotions given by Lutheran Hour Ministries by visiting the link below.`
  
  dailyDevUrl = `https://www.lhm.org/dailydevotions/default.asp?date=20220129`;

  dailyDevUrlText = `Daily Devotions from Lutheran Hour Ministries`;
  ngOnInit(): void {
  }

}
