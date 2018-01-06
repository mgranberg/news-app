import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-svd',
  templateUrl: './svd.component.html',
  styleUrls: ['./svd.component.css']
})
export class SvdComponent implements OnInit {
  newsList: NewsItem[];
  svd: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.svd = this.dataService.svd
      this.newsList = this.dataService.newsList;
  }
}
