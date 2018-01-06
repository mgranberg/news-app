import { Http, Response, RequestOptions, Headers, HttpModule} from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { NewsItem } from "./shared/NewsItem.model";

@Injectable()
export class DataService {
    public expressen: Object;
    public expressenNews: Object[];
    
    public svd: Object;
    public svdNews: Object[];
    
    public nt: Object;
    public ntNews: Object[];

    public newsList: NewsItem [] = [];

    constructor(private http: Http){
        this.collectAllNews();
        }

    async collectAllNews(){
        this.getExpressen2().subscribe((response) => {
                this.expressen = response.json().rss.channel;
                this.expressenNews = response.json().rss.channel.item;
                this.getSvd2().subscribe((response) => {
                    this.svd = response.json().rss.channel;
                    this.svdNews = response.json().rss.channel.item;
                    this.getNt2().subscribe((response) => {
                        this.nt = response.json().rss.channel;
                        this.ntNews = response.json().rss.channel.item;
                        this.populateNewsList();
                    }, 
                    (error) => {

                    });
                }),
                (error) => {console.log(error);
                    return false;
                };
        },
            (error) => {console.log(error);
                return false;
            });      
    }

    getExpressen2(){
        let Api = "http://localhost:54297/api/news/expressen";
        return this.http.get(Api);
    }

    getSvd2(){
        let Api = "http://localhost:54297/api/news/svd";
        return this.http.get(Api);
    }

    getNt2(){
        let Api = "http://localhost:54297/api/news/nt";
        return this.http.get(Api);
    }

    populateNewsList(){
        if(this.expressenNews){
            this.expressenNews.forEach((element: {title, description, pubDate, link, category?} ) => {
                this.newsList.push(new NewsItem(element.title, element.description.cdata, new Date(element.pubDate), element.link, "expressen" ));
        });

        }

        if(this.svdNews){
            this.svdNews.forEach((element: {title, description, pubDate, link, category?} ) => {
                this.newsList.push(new NewsItem(element.title.cdata, element.description.cdata, new Date(element.pubDate), element.link, "svd" ));
            });
        }

        if(this.ntNews){
            this.ntNews.forEach((element: {title, description, pubDate, link, category?} ) => {
                this.newsList.push(new NewsItem(element.title, element.description, new Date(element.pubDate), element.link, "nt", element.category ));
            });
        }

        console.log(this.newsList);

        this.newsList.sort(function(a,b){
            var A: Date = a.pubDate;
            var B: Date = b.pubDate;
            if(A<B){
            return 1
            }else if(B<A){
                return -1
            }else{
                return 0
            }
        });

        console.log(this.newsList);
        
    }
}