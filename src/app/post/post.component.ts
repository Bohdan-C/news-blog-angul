import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { PostsService, Post } from '../post.service';
import { NewsComponent } from '../news/news.component';
import { Post } from '../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsComponent
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('params', params);
      this.post = this.newsService.getById(+params.id);
      console.log('this.post', this.post)
    });
  }
}
