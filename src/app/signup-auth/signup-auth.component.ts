import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RedirectService } from '../shared/redirect.service';
@Component({
  selector: 'app-signup-auth',
  templateUrl: './signup-auth.component.html',
  styleUrls: ['./signup-auth.component.css'],
})
export class SignupAuthComponent implements OnInit {
  constructor(private signup: SignupService, private router: Router,private _sanitizer:DomSanitizer, private redirects:RedirectService) {}
  showLogin=false;
  safeURL:any;
  public isCollapsed;
  ngOnInit(): void {
    //this.signup.isReload(); //This means ngOnInit() will execute if you refresh your browser or first initialize a component but not when other events occur.

  }
  uname: string = '';
  signUp(data: Signup): void {
    console.log(data);
    console.log(data['Email']);
    console.log(data.name);
    this.redirects.setMessage(data["Role"]);

    this.signup.userSignUp(data);



  }
  openLogin()
  {
this.showLogin=true;

  }
  showSignup()
  {
this.showLogin=false;

  }
}
