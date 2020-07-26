import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchPipe } from './search.pipe';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [AppComponent, NewsComponent, SearchPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    MatToolbarModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [NewsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
