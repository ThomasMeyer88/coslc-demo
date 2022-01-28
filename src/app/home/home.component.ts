import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }
  alertHTML = `<a href="http://coslc.org/wp-content/uploads/2021/06/Christ-Our-Savior-Administrative-Assistant.pdf">Administrative Assistant</a>`;
  
  alertText = `Christ Our Savior is hiring a part time ${this.alertHTML}. To apply, please send your resume to <b>jobs@coslc.org</b>`
  
  watchText = `We invite you to join us online (Sunday at 10:30 AM) by watching our live stream or listening to our live broadcast.`
  ngOnInit(): void {
  }

}
