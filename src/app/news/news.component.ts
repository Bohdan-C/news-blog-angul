import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface News {
  title: string,
  // urlImage?: string,
  content: string,
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {

  news: News[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<News[]>(
        'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-23&sortBy=publishedAt&apiKey=f76722811099462eb91b92fbe17a3cbb'
      )
      .subscribe(news => {
        console.log('response', news)
        this.news = news
      });
  }
}
