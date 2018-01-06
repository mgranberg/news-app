import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  newsList: NewsItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.newsList = this.dataService.newsList;
  }

}
