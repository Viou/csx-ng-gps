import { Injectable } from '@angular/core';
import { LocoGpsData} from '../../shared/locoGpsData.model';
import { MainContent} from '../../shared/mainContent.model';

@Injectable()
export class MainContentService {
  buildMainContent(locoGpsData: LocoGpsData[]): Promise<MainContent> {
    return new Promise((resolve, reject) => {
      const mainContent = new MainContent();
      mainContent.locoGpsData = locoGpsData.filter(x => x.loco_speed_m > 10);
      mainContent.locoGpsData = mainContent.locoGpsData.filter(x => {
        const regex1 = RegExp('[a-zA-Z]{6}');
        return regex1.test(x.train_i);
      });
      resolve(mainContent);
    }); }
  constructor() { }

}
