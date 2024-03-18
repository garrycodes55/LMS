import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
pageTitle="data binding in angular."
A=5;
  constructor() {
    console.log(this.A);
    let b ="GARIMA"; // we can actually declare variables inside the constructor.
    console.log(b);
   }

  ngOnInit(): void {
    console.log(this.A);
  }

}
