import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-svd',
  templateUrl: './svd.component.html',
  styleUrls: ['./svd.component.css']
})
export class SvdComponent implements OnInit {
  //Variabel för newsList
  newsList: NewsItem[];
    //Variabel när jag kan spara json objectet för svd
  svd: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Sparar svd:s Json samt newsList från DataService
      this.svd = this.dataService.svd
      this.newsList = this.dataService.newsList;
  }

    //NOTE: Anledningen till att jag sparar Json objektet också när jag ändå har nyheter är,
    //att jag vill komma åt allmän information och just denna feed, såsom titel, beskrivning och länk till huvudsidan.
}
