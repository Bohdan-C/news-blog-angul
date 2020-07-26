import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../interfaces';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  p: number = 1;

  news: News[] = [];

  loading = false;

  searchStr = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loading = true;
    this.newsService.ngOnInit().subscribe((news: any) => {
      this.news = news.articles;
      this.loading = false;
    });
  }
  getById(id: number) {
    return this.news.find((n) => n.id === id);
  }
}
