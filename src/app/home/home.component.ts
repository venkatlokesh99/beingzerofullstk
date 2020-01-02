import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x="RANDOM DATA";
y:number =3;
z=true;
  constructor() { }

  ngOnInit() {
    this.x=this.x;
  }
fnClick(){
  this.x=this.x+ " "+ "new";
}
}
