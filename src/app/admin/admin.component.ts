import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private route:Router){}


  username = ""
  password = ""

  readValue=()=>{

    let data:any = {"username" : this.username, "password" : this.password}

    if (this.username == "admin" && this.password == "nestdigital") {

      this.route.navigate(['/addEmployee'])
      
    } else {
      
      alert("Invalid Credentials")
    }
  }

}
