import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentService } from './services/main-content/main-content.service';
<<<<<<< HEAD
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/';
=======
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';

>>>>>>> da41e5e144c5184201652d1563df8774d2df005c

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocoGpsService } from './services/loco-gps/loco-gps.service';
import { MainContentComponent } from './main-content/main-content.component';
import { LocoGpsTableComponent } from './main-content/loco-gps-table/loco-gps-table.component';
import { LargeIconCardsComponent } from './main-content/large-icon-cards/large-icon-cards.component';
import { LargeIconCardComponent } from './main-content/large-icon-cards/large-icon-card/large-icon-card.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    LocoGpsTableComponent,
    LargeIconCardsComponent,
    LargeIconCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatButtonModule,
<<<<<<< HEAD
    MatTabsModule,
    MatCardModule
=======
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule
>>>>>>> da41e5e144c5184201652d1563df8774d2df005c
  ],
  providers: [
    LocoGpsService,
    MainContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
