import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://reqres.in/api/users?page=2')
  }
}
/*Dependency injection*/