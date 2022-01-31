import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { employee } from '../types/employee';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {

  private httpClient: HttpClient;

  constructor(http: HttpClient) { 
    this.httpClient = http;
  }

  employees: employee [] = [
    { title: `Pastor`,
      name: `Dan Mueller`,
      bio: ``,
      photo: `assets/img/pastor.jpg`},
    {
      title: `Organist`,
      name: `Sharon Hudkins`,
      bio: ``,
      photo: `assets/img/organist.jpg`
    }
  ]

  staffHeader = `Meet the Staff`;

  ngOnInit(): void {
    this.httpClient.get('assets/pastorBio.txt', { responseType: 'text' })
      .toPromise().then(data => {
        this.employees[0].bio = data;
      });
    this.httpClient.get('assets/organistBio.txt', { responseType: 'text' })
      .toPromise().then(data => {
        this.employees[1].bio = data;
      });
    
    console.log(this.employees);
  }

}
