import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'employeeDate'
})
export class EmployeeDatePipe implements PipeTransform{
    transform(value:string ) {
        if(value.includes('p')){
            let date = value.split('p');  
            return date[0]+ 'PM';
        }else{
            let date = value.split('a');  
            return date[0]+'AM';
        }   
    }
}