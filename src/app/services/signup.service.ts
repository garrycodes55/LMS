import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isLoggedIn=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:Signup){

     this.isLoggedIn.next(true);
     localStorage.setItem('signup', JSON.stringify(result.body))
     this.router.navigate(['signuphome'])

    });



  }
  isReload()
  {
if (localStorage.getItem('signup'))
{
  this.isLoggedIn.next(true);
  this.router.navigate(['signuphome'])
  localStorage.clear();
}

  }
}
