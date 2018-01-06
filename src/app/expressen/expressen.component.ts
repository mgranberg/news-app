import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-expressen',
  templateUrl: './expressen.component.html',
  styleUrls: ['./expressen.component.css']
})
export class ExpressenComponent implements OnInit {
  expressen: any;
  newsList: NewsItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.newsList = this.dataService.newsList;
    this.expressen = this.dataService.expressen;
  }
}
