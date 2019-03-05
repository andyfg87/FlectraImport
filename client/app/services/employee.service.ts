import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../../Employee';

@Injectable()
export class EmployeeService{
    constructor(private http:Http){
        console.log('Task service Initialized ...');
    }
    
    getEmployees():Observable<Employee[]>{
        console.log('On Init');
        return this.http.get('http://localhost:8000/api/employees')
                    .map((res: Response)=><Employee[]>res.json());
      }
}