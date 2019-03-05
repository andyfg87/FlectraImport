import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDatePipe } from './components/employees/employeeDate.pipe';

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent, EmployeesComponent, EmployeeDatePipe],
    bootstrap: [AppComponent]
})
export class AppModule{}