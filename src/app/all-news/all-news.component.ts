import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  //Variabel där jag kan spara newsList
  newsList: NewsItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Hämtar newsList från DataService
    this.newsList = this.dataService.newsList;
  }

}
