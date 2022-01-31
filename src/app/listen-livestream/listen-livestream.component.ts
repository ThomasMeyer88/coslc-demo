import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen-livestream',
  templateUrl: './listen-livestream.component.html',
  styleUrls: ['./listen-livestream.component.sass']
})
export class ListenLivestreamComponent implements OnInit {

  constructor() { }

  listenHeaderText = `Listen Live`;
  
  ngOnInit(): void {
  }

}
