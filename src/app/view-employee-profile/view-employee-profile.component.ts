import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-profile',
  templateUrl: './view-employee-profile.component.html',
  styleUrls: ['./view-employee-profile.component.css']
})
export class ViewEmployeeProfileComponent {

  id:any = ""
  
  constructor(private api:ApiService){

    this.id = localStorage.getItem("EmpInfo")
    
    let data:any = {"id" : this.id}
    this.api.viewEmployeeProfile(data).subscribe(

      (response:any)=>{
        this.data = response
      }

    )
  }
data:any = []
}
