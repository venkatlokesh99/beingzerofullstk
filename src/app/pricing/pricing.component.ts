import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
users={}
count=0
  constructor(private dataService : DataService) { }

  ngOnInit() {
this.dataService.getData().subscribe(d=>{
this.users =d["data"];
alert(this.users["length"]);
this.count=this.users["length"];
})
  }

}
