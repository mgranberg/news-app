import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-nt',
  templateUrl: './nt.component.html',
  styleUrls: ['./nt.component.css']
})
export class NtComponent implements OnInit {
  nt: any;
  newsList: NewsItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.nt = this.dataService.nt;
    this.newsList = this.dataService.newsList;
  }

}
