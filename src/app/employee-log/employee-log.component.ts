import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent {

  date = ""
  constructor(private api:ApiService){

    this.api.viewEmployeeLog().subscribe(
      (response)=>{
        this.data = response

      }
    )

  }

  readValue=()=>{
    let data1:any = {"date" : this.date}

    this.api.employeeLogByDate(data1).subscribe(
      (response:any)=>{

        if (response.length == 0) {

          alert("No entry in given date")
          window.location.reload()
          
        } else {

          this.data = response
          
        }
        
      }
    )
    
  }
  data:any = []

}
