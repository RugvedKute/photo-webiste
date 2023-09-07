import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ArticlesComponent } from './pages/articles/articles.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    PagesComponent,
    FooterComponent,
    AboutMeComponent,
    ServicesComponent,
    PortfolioComponent,
    ArticlesComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
