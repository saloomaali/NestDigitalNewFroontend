import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {
  
  empId:any = ""

  

  constructor(private api:ApiService){

    this.empId = localStorage.getItem("EmpInfo")

    let data:any = {"empId" : this.empId}

    this.api.leaveStatus(data).subscribe(
      (response:any)=>{

        this.data = response
        console.log(response)
        

      }
    )

    
  }
data:any = []

}
