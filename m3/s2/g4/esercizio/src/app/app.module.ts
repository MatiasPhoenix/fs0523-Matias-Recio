import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AttiviComponent } from './pages/attivi/attivi.component';
import { InattiviComponent } from './pages/inattivi/inattivi.component';
import { HeaderComponent } from './pageElement/header/header.component';
import { FooterComponent } from './pageElement/footer/footer.component';
import { CardPostComponent } from './pageElement/card-post/card-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttiviComponent,
    InattiviComponent,
    HeaderComponent,
    FooterComponent,
    CardPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
