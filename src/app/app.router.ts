//Jag valde att lägga min routing i en fil just för att separera

//Importerar de moduler vi behöver för att hantera vår routing och export av routing objektet
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Importerar alla våra komponenter som behöver routing
import { AppComponent } from "./app.component";
import { AllNewsComponent } from "./all-news/all-news.component";
import { ExpressenComponent } from "./expressen/expressen.component";
import { NtComponent } from "./nt/nt.component";
import { SvdComponent } from "./svd/svd.component";

//Här skapar vi en router som hanterar routingen beroende på vilken path som specificeras.
export const router: Routes = [
    //Den första pathen med en tom sträng refererat till root-sidan
    //och eftersom jag vill att all-news ska visas när appen startar så gör jag en redirect till den komponenten.
    { path: "", redirectTo: "all-news", pathMatch: "full" },
    //resten specificerar en path som ska användas för att routa till respektive komponent
    //dessa paths används sedan i html filerna som routerLinks
    { path: "all-news", component: AllNewsComponent },
    { path: "expressen", component: ExpressenComponent },
    { path: "nt", component: NtComponent },
    { path: "svd", component: SvdComponent }
];

//Jag exporterar här en module som inkluderar alla providers som jag sen kan använda i min app.module.ts
export const routes: ModuleWithProviders = RouterModule.forRoot(router);