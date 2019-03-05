import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../../Employee';
import { PagerService } from '../../services/pager.service';

@Component({
    moduleId: module.id,
    selector:'employees',
    templateUrl: 'employees.component.html'
})

export class EmployeesComponent implements OnInit{
  
  employees: Employee[];    

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    private employeeService:EmployeeService
    private pagerService:PagerService;

    constructor(employeeService:EmployeeService,pagerService:PagerService) { 
      this.employeeService = employeeService;
      this.pagerService = pagerService;
    }

    ngOnInit(): void {
      this.employeeService.getEmployees().subscribe(emp=>{
        this.employees = emp;        
        // initialize to page 1
        this.setPage(1);
        console.log(emp);
      });
      
     // throw new Error("Method not implemented.");
    }

    setPage(page: number) {
      // get pager object from service
      this.pager = this.pagerService.getPager(this.employees.length, page);

      // get current page of items
      this.pagedItems = this.employees.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  
}