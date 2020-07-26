import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { NewsComponent } from "./news/news.component";
import { PostComponent } from './post/post.component';

const routes: Routes = [
    {path: '', component: NewsComponent},
    {path: 'news/:id', component: PostComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}