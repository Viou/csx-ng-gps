import { LocoGpsData } from './locoGpsData.model';
export class MainContent {
  public locoGpsData: LocoGpsData[];
  buildMainContent(locoGpsData: LocoGpsData[]): Promise<MainContent> {
    return new Promise((resolve, reject) => {
      const mainContent = new MainContent();
      mainContent.locoGpsData = locoGpsData;
      resolve(mainContent);
    });
  }
  constructor() {}
}
