import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-expressen',
  templateUrl: './expressen.component.html',
  styleUrls: ['./expressen.component.css']
})
export class ExpressenComponent implements OnInit {
  expressen: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getExpressen().then(res => {
      this.expressen = this.dataService.expressenNews;
    });
    
  }
}
