import { Http, Response, RequestOptions, Headers, HttpModule} from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { NewsItem } from "./shared/NewsItem.model";

//Detta är en service för att hantera all hämtning av data.
//Denna måste ha decoratorn Injectavble för att Http är en annan service som måste injiceras in i denna.
@Injectable()
export class DataService {
    //Skapar ett object för varje nyhetssite, Denna innehåller all json-data
    public expressen: Object;
    //Skapar även en array av alla "items" dvs alla nyheter från respektive site
    public expressenNews: Object[];
    
    public svd: Object;
    public svdNews: Object[];
    
    public nt: Object;
    public ntNews: Object[];

    public newsList: NewsItem [] = [];
    
    //I constructorn instansierar jag en http class
    constructor(private http: Http){
        //sen kör jag collectAll news vilket hämtar alla nyheter
        this.collectAllNews();
        }

    //Denna metod hämtar alla nyheter
    collectAllNews(){
        //Först hämtar vi expressen! Detta genom dess egna metod som returnerar en observable som vi här subscribar på.
        //När vi sedan fått ett svar så gör vi om det till json och plockar ut channel och sparar i variabeln.
        //Efter detta sparar vi även item i sin variabel och detta är en array av nyheter
        this.getExpressen().subscribe((response) => {
                this.expressen = response.json().rss.channel;
                this.expressenNews = response.json().rss.channel.item;
                //När detta är gjort gör vi samma sak för svd
                this.getSvd().subscribe((response) => {
                    this.svd = response.json().rss.channel;
                    this.svdNews = response.json().rss.channel.item;
                    //Sen även samma för nt
                    this.getNt().subscribe((response) => {
                        this.nt = response.json().rss.channel;
                        this.ntNews = response.json().rss.channel.item;
                        //När alla nyheter är hämtade från backend så körs populateNewsList.
                        //Detta är den samlade nyhetslistan oberoende vart dom kommer ifrån
                        this.populateNewsList();
                    }, 
                    //Loggar felmeddelanden 
                    (error) => {
                        console.log(error);
                    });
                }),
                (error) => {
                    console.log(error);
                };
        },
            (error) => {
                console.log(error);
            });      
    }

    //Metoderna som skickar en get request till back-end
    getExpressen(){
        let Api = "http://localhost:54297/api/news/expressen";
        return this.http.get(Api);
    }

    getSvd(){
        let Api = "http://localhost:54297/api/news/svd";
        return this.http.get(Api);
    }

    getNt(){
        let Api = "http://localhost:54297/api/news/nt";
        return this.http.get(Api);
    }

    //Metod som samlar alla nyheter oberoende källa.
    populateNewsList(){
        //dubbelkollar att nyheterna finns...
        if(this.expressenNews){
            //Loopar egenom alla expressen nyheter och pushar dom till newsList arrayen som nya instanser av NewsItem,
            //Jag plockar bara ut de parametrar som jag behöver och skriver även med källan manuellt.
            this.expressenNews.forEach((element: {title, description, pubDate, link, category?} ) => {
                this.newsList.push(new NewsItem(element.title, element.description.cdata, new Date(element.pubDate), element.link, "expressen", element.category ));
            });
        }

        //Samma sak för svd
        if(this.svdNews){
            this.svdNews.forEach((element: {title, description, pubDate, link, category?} ) => {
                this.newsList.push(new NewsItem(element.title.cdata, element.description.cdata, new Date(element.pubDate), element.link, "svd", element.category.cdata ));
            });
        }

        //Samma sak för NT
        if(this.ntNews){
            this.ntNews.forEach((element: {title, description, pubDate, link, category?} ) => {
                this.newsList.push(new NewsItem(element.title, element.description, new Date(element.pubDate), element.link, "nt", element.category ));
            });
        }

        //Nu Innehåller newsList alla nyheter från alla siter men dom ligger uppdelade på källa eftersom dom pushades i den ordningen så den måste sorteras.
        //Därför kör jag en sort metod på arrayen där jag jämför datumen med varann och nu blir listan sorterad på datum
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
        //Vi har nu en lista med alla nyheter som lätt kan användas till alla komponenter.
        
    }
}