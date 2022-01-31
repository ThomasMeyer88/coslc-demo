import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.sass']
})
export class DonateComponent implements OnInit {

  constructor() { }

  verse = `“Everything comes from you, and we give you only
  what has come from your hands.”`;
  verseSource = `1 Chronicles 29:14`;
  giveText = `Here at Christ Our Savior, we believe that generous giving is one of the best ways to grow in our trust in God. For over 20 years, God has always provided the necessary resources to carry out our congregation’s mission and ministry. God has also generously provided for the people who generously contribute. As Christians, we recognize that God blesses us with time, talent and treasures. All <i>we have</i> actually are not ours but are gifts from God. He blesses us so we can serve Him and our neighbor. We thank you for your generous and faithful support to our ministry.  `
  givePhysicalHeader = `By Mail or Bill Pay`;
  churchName = `Christ Our Savior Lutheran Church`;
  adrLn1 = `5323 Blanco Road`;
  adrLn2 = `San Antonio, TX 78216`;
  onlineOpt1 = `Online via Faithstreet`;
  onlineOpt2 = `Online via Paypal`;
  opt1URL = `https://www.faithstreet.com/church/christ-our-savior-lutheran-church-san-antonio-tx-f1d0b97b-be74-4316-ae5a-d7a428d6d34b/giving`;
  opt2URL = `https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=UBCHEW796G8TW`;
  ngOnInit(): void {
  }

}
