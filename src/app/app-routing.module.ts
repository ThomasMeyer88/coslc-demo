import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { WatchLivestreamComponent } from './watch-livestream/watch-livestream.component';
import { ListenLivestreamComponent } from './listen-livestream/listen-livestream.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { DailyDevotionsComponent } from './daily-devotions/daily-devotions.component';
import { StaffComponent } from './staff/staff.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'watch', component: WatchLivestreamComponent },
  { path: 'listen', component: ListenLivestreamComponent },
  { path: 'join', component: JoinUsComponent },
  { path: 'dailydevotions', component: DailyDevotionsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
