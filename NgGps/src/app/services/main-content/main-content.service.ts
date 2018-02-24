import { Injectable } from '@angular/core';
import { LocoGpsData} from '../../shared/locoGpsData.model';
import { MainContent} from '../../shared/mainContent.model';

@Injectable()
export class MainContentService {
  buildMainContent(locoGpsData: LocoGpsData[]): Promise<MainContent> {
    return new Promise((resolve, reject) => {
      const mainContent = new MainContent();
      mainContent.locoGpsData = locoGpsData;
      resolve(mainContent);
    }); }
  constructor() { }

}
