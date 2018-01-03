import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { ExpressenComponent } from './expressen/expressen.component';
import { SvdComponent } from './svd/svd.component';
import { NtComponent } from './nt/nt.component';


@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    ExpressenComponent,
    SvdComponent,
    NtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
