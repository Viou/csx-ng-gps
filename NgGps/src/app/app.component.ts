import { Component } from '@angular/core';
import { HeaderUserInput } from './shared/headerUserInput.model';
import { LocoGpsService} from './services/loco-gps/loco-gps.service';
import { MainContentService } from './services/main-content/main-content.service';
import { MainContent } from './shared/mainContent.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  mainContentData = new MainContent();

  onSearchDataset(userInput: HeaderUserInput) {
    this.locoGpsService.getLocoGpsData(userInput.trainId, userInput.subdivision)
      .then(results => this.mainContentService.buildMainContent(results))
      .then(mainContent => this.mainContentData = mainContent);
  }

  constructor(
    private locoGpsService: LocoGpsService,
    private mainContentService: MainContentService
  ) {}
}
