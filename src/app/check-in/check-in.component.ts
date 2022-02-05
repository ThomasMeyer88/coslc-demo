import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateService } from '../services/dateService';
import { member } from '../types/member';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.sass']
})
export class CheckInComponent implements OnInit {

  constructor(
  ) { }

  signIn= new FormGroup({
    email: new FormControl('', [Validators.email]),
    name: new FormControl('', Validators.required),
    phone: new FormControl(''),
    status: new FormControl('', Validators.required)
  });

  selected = 'Visitor';
  
  dateService = new dateService;
  
  members: member[] = [
    {name: `Susan Meyer`, phone: `0123456789`, email: `susanmeyer@gmail.com`, status: `Member`},
    {name: `Indiana Jones`, phone: null, email: null, status: `Visitor`}
  ]

  checkInHeader = `Service Sign In For `;

  ngOnInit(): void {
    this.checkInHeader += `${this.dateService.weekDay}, ${this.dateService.dateMDY}`;
    this.signIn.get('status').setValue('Visitor');
  }

  async onSubmit() {
    let member: member = {
      name: this.signIn.value.name,
      email: this.signIn.value.email,
      phone: this.signIn.value.phone,
      status: this.signIn.value.status
    };
    this.members.push(member);
    this.clearForm();
  }

  clearForm() {
    this.signIn.reset();

    this.signIn.get('status').setValue('Visitor');
    Object.keys(this.signIn.controls).forEach(key => {
      this.signIn.get(key).setErrors(null) ;
    });
  }

}
