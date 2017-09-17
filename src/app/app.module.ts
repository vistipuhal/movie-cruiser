import { MessageService } from './msg.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar.component';
import { SearchComponent } from './search.component';
import { DashboardComponent } from './dashboard.component';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DisplayService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
