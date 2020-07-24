import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

export interface News {
  title: string;
  urlToImage?: string;
  content: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  form: FormGroup;

  p: number = 1;

  news: News[] = [];

  // API_KEY: string = 'f76722811099462eb91b92fbe17a3cbb';

  // formData: string = 'apple';

  constructor(private http: HttpClient) {}

  submit() {
    console.log('form submited', this.form)
    let formData = 'apple'
    console.log('formData', formData)
    formData = { ...this.form.value };
    console.log('formData', formData);
  }

  ngOnInit() {
    let params = new HttpParams();
    params = params.append('q', 'cars');

    this.form = new FormGroup({
      search: new FormControl(''),
    });

    this.http
      .get<News[]>(
        'http://newsapi.org/v2/everything?' +
          params +
          '&from=2020-06-24&sortBy=popularity&apiKey=f76722811099462eb91b92fbe17a3cbb'
      )
      .subscribe((news: any) => {
        console.log('response', news);
        this.news = news.articles;
      });
  }
}
