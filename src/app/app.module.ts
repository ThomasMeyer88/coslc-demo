import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WatchLivestreamComponent } from './watch-livestream/watch-livestream.component';
import { ListenLivestreamComponent } from './listen-livestream/listen-livestream.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { DailyDevotionsComponent } from './daily-devotions/daily-devotions.component';
import { StaffComponent } from './staff/staff.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WatchLivestreamComponent,
    ListenLivestreamComponent,
    JoinUsComponent,
    DailyDevotionsComponent,
    StaffComponent,
    DonateComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
