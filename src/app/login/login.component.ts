import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {console.log(this.name) }

  ngOnInit(): void {
  }
  uname:string="Garima";
  name:string="Garima";
  email:String="garima.saluja@wabtec.com";

  fun(a:string){
    console.log(a);



  }

}

