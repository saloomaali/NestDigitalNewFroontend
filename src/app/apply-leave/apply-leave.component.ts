import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {

  empId:any = ""
  leaveType = ""
  remarks = ""
  fromDate = ""
  toDate = ""

  constructor(private api:ApiService){

  }

  readValue=()=>{
    this.empId = localStorage.getItem("EmpInfo")
    let data:any = {"empId" : this.empId,"leaveType" : this.leaveType, "remarks" : this.remarks, "fromDate" : this.fromDate, "toDate" : this.toDate }
    this.api.applyLeave(data).subscribe(

      (response:any)=>{
        if (response.status == "success") {
          alert("Leave Applied")
          window.location.reload()
        }
      }
    )
  }

}
