import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-nt',
  templateUrl: './nt.component.html',
  styleUrls: ['./nt.component.css']
})
export class NtComponent implements OnInit {
  //Variabel när jag kan spara json objectet för nt
  nt: any;
  //Variabel för newsList
  newsList: NewsItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Sparar nt:s Json samt newsList från DataService
    this.nt = this.dataService.nt;
    this.newsList = this.dataService.newsList;

    //NOTE: Anledningen till att jag sparar Json objektet också när jag ändå har nyheter är,
    //att jag vill komma åt allmän information och just denna feed, såsom titel, beskrivning och länk till huvudsidan.
  }

}
