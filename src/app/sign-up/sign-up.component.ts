import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../types/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  submitted: Boolean = false;
  submittedText: string = 
    `Account submission successful.  Please check your email for further details.`;
  error: Boolean = false;
  errorMessage: string;

  createUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor () {}

  ngOnInit(): void {
  }

  async onSubmit() {
    let user: User = 
          {   username: this.createUser.value.username,
              email: this.createUser.value.email,
              password: this.createUser.value.password,
              id: null
          };
    this.submitted = true;
  }

  passwordsMatch() {
    return this.createUser.value.password === this.createUser.value.confirmPassword;
  }


}
