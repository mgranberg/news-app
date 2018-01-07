import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsItem } from '../shared/NewsItem.model';

@Component({
  selector: 'app-expressen',
  templateUrl: './expressen.component.html',
  styleUrls: ['./expressen.component.css']
})
export class ExpressenComponent implements OnInit {
  //Variabel när jag kan spara json objectet för expressen
  expressen: any;
  //Variabel för newsList
  newsList: NewsItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Sparar expressens Json samt newsList från DataService
    this.newsList = this.dataService.newsList;
    this.expressen = this.dataService.expressen;
  }

  //NOTE: Anledningen till att jag sparar Json objektet också när jag ändå har nyheter är,
  //att jag vill komma åt allmän information och just denna feed, såsom titel, beskrivning och länk till huvudsidan.
}
