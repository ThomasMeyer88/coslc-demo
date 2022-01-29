import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-livestream',
  templateUrl: './watch-livestream.component.html',
  styleUrls: ['./watch-livestream.component.sass']
})
export class WatchLivestreamComponent implements OnInit {

  constructor() { }

  watchHeaderText = `Video Stream`
  ngOnInit(): void {
  }

}
