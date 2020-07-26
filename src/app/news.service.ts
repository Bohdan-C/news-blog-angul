import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './interfaces';

@Injectable({ providedIn: 'root' })
export class NewsService implements OnInit {
  API_KEY = 'f76722811099462eb91b92fbe17a3cbb'
  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get<News[]>(
      'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-26&sortBy=publishedAt&apiKey=' + this.API_KEY
    );
  }
}
