import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importerar min egna router
import { routes } from "./app.router";
import { DataService } from "./data.service";


import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { ExpressenComponent } from './expressen/expressen.component';
import { SvdComponent } from './svd/svd.component';
import { NtComponent } from './nt/nt.component';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    ExpressenComponent,
    SvdComponent,
    NtComponent
  ],
  imports: [
    BrowserModule,
    //Deklarerar min egna router
    routes,
    HttpModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
