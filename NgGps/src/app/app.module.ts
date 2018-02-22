import { GraphCardsComponent } from './main-content/graph-cards/graph-cards.component';
import { MainContentService } from './services/main-content/main-content.service';
import { LocoGpsService } from './services/loco-gps/loco-gps.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LocoGpsTableComponent } from './main-content/loco-gps-table/loco-gps-table.component';
import { LargeIconCardsComponent } from './main-content/large-icon-cards/large-icon-cards.component';
import { LargeIconCardComponent } from './main-content/large-icon-cards/large-icon-card/large-icon-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    LocoGpsTableComponent,
    LargeIconCardsComponent,
    LargeIconCardComponent,
    GraphCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    LocoGpsService,
    MainContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
