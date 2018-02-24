import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentService } from './services/main-content/main-content.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocoGpsService } from './services/loco-gps/loco-gps.service';
import { MainContentComponent } from './main-content/main-content.component';
import { LocoGpsTableComponent } from './main-content/loco-gps-table/loco-gps-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    LocoGpsTableComponent
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
