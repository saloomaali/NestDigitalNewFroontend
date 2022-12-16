import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {
  emp_Code = ""
  name = ""
  username = ""
  password = ""

  constructor(private api:ApiService){}
  readValue=()=>{

    let data:any = {"emp_Code" : this.emp_Code, "name" : this.name, "username" : this.username, "password" : this.password}

    this.api.addSecurity(data).subscribe(
      (response:any)=>{
        if (response.status == "success") {
          alert("Security added successfully")
          window.location.reload()
        }
      }
    )
    
  }
}
