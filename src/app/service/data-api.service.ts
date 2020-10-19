import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(
    private http: HttpClient

  ) { }

  getNews(){
   return  this.http.get<any>('/assets/json/news.json')
  }
}
