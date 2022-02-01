import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WatchLivestreamComponent } from './watch-livestream/watch-livestream.component';
import { ListenLivestreamComponent } from './listen-livestream/listen-livestream.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { DailyDevotionsComponent } from './daily-devotions/daily-devotions.component';
import { StaffComponent } from './staff/staff.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceHoursComponent } from './service-hours/service-hours.component';
import { CheckInComponent } from './check-in/check-in.component';

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
    ContactComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ServiceHoursComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
