import { Component, OnInit } from '@angular/core';
import { EmployeServiceService } from '../services/employe-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  users: any;
  constructor(private api: EmployeServiceService) { }

  ngOnInit() {
    this.api.get('users?page=1').subscribe(res => {
      this.users = res;
      debugger;
      console.log('data response', this.users);
    });
      this.api.post('users?page=1').subscribe(res => {
        this.users = res;
        debugger;
        console.log('data response', this.users);
    });
  }
  }
