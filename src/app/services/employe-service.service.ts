import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



const API_URL = 'https://localhost:44378/';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  constructor(private http: HttpClient) { }

  public get(url:any): Observable<any> {
    return this.http.get(API_URL + 'api/Employee/GetEmployee').pipe(map(res => res));
  }
  public post(url:any): Observable<any> {
    return this.http.post(API_URL + '/api/Employee/AddEmployee', JSON.stringify(this.post))
    .pipe(
    )
  }  
}
  

