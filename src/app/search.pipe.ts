import { Pipe, PipeTransform } from "@angular/core";
import { News } from "./interfaces";

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
    transform(news: News[], search = ''): News[] {
        if(!search.trim()) {
            return news
        }
        return news.filter(news => {
            return news.title.toLowerCase().includes(search.toLowerCase())
        })
    }

}