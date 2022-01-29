import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() { }
  footerText = `Copyright © 2022 Christ Our Savior Lutheran Church. All Rights Reserved.`;
  ngOnInit(): void {
  }

}
