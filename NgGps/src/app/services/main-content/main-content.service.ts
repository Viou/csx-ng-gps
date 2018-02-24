import { Injectable } from '@angular/core';
import { LocoGpsData} from '../../shared/locoGpsData.model';
import { MainContent} from '../../shared/mainContent.model';

@Injectable()
export class MainContentService {
  buildMainContent(locoGpsData: LocoGpsData[]): Promise<MainContent> {
    return new Promise((resolve, reject) => {
      const mainContent = new MainContent();
      const geoSet =  new Array();
      mainContent.locoGpsData = locoGpsData.filter(x => x.loco_speed_m > 10);
      mainContent.locoGpsData = mainContent.locoGpsData.filter(x => {
        const regex1 = RegExp('[a-zA-Z]{6}');
        return regex1.test(x.train_i);
      });
      for (let i = 0; i < mainContent.locoGpsData.length; i++) {
          const gpsData = mainContent.locoGpsData[i];
          let good = true;
          for (let j = 0; j < geoSet.length; j++) {
            if (gpsData.report_est_d === geoSet[j].report_est_d &&
              gpsData.loco_i === geoSet[j].loco_i) {
              good = false;
            }
          }
          if (good) {
            console.log('haha');
            geoSet.push(gpsData);
            console.log(geoSet);
          }
         //  const temp = {loco_i: gpsData.loco_i, train_i: gpsData.train_i,
         //    trans_subdiv_c: gpsData.trans_subdiv_c, report_est_d: gpsData.report_est_d, loco_speed_m: gpsData.loco_speed_m};
         // if (!geoSet.has(temp)) {
         //   geoSet.add(temp);
         // }
      }
      // mainContent.locoGpsData.forEach(function(sm){
      //   if(!geoSet.has(sm.trans_subdiv_c)) geoSet.add(sm.geoSet);
      // })
      const unique = new Set(geoSet);
      console.log(unique);
      mainContent.locoGpsData = Array.from(unique);
      resolve(mainContent);
    }); }
  constructor() { }

}
