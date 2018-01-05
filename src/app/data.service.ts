import { Http, Response, RequestOptions, Headers, HttpModule} from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

    public expressenNews: Object;

    constructor(private http: Http){ }

    getExpressen(){
        let promise = new Promise((resolve, reject) => {
            let Api = "http://localhost:54297/api/news";

            this.http.get(Api).toPromise().then(res => {
                console.log(res.json());
                this.expressenNews = res.json().rss.channel;
                resolve();
            }, err => {
                reject();
            })
        });
        return promise;

        // this.http.get("http://localhost:54297/api/news").subscribe(res => {
        //     this.expressenNews = res.json();
        //     debugger
        // });
    }

    getSvd(){
        
    }

    getNt(){
        
    }
}