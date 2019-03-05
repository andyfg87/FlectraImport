import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { PagerService } from './services/pager.service';

@Component({
  moduleId: module.id,
  selector:'my-app',
  templateUrl: 'app.component.html',
  providers: [EmployeeService, PagerService]
})

export class AppComponent{}