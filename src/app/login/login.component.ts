import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username = 'javainuse'
  password = ''
  invalidLogin = false

  constructor(
    private router: Router,
  ){}

  ngOnInit() {
  }

  checkLogin() {
    // if (this.loginservice.authenticate(this.username, this.password)
    // ) {
    //   this.router.navigate(['']);
    //   this.invalidLogin = false;
    // } else
    //   this.invalidLogin = true;
    this.router.navigate(['']);
  }
}
