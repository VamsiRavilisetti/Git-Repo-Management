import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {

  constructor(private http:HttpClient) { }
  getData(url:any){
    return this.http.get(url);
  }
}
