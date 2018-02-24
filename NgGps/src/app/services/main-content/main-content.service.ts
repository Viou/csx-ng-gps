import { Injectable } from '@angular/core';
import { LocoGpsData} from '../../shared/locoGpsData.model';
import { MainContent} from '../../shared/mainContent.model';
import {LocoGpsIcons} from '../../shared/locoGpsIcons.model';
import {LargeIconCardStyles} from '../../shared/largeIconCardStyles.model';
import {LargeIconCard} from '../../shared/largeIconCard.model';

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
              break;
            }
          }
          if (good) {
            geoSet.push(gpsData);
          }
      }
      mainContent.locoGpsData = geoSet;




      const uniqueTrains = [];
      const uniqueLocos = [];
      const uniqueSubs = [];
      // const uniqueDevice = [];
      for (let i = 0; i < mainContent.locoGpsData.length; i++) {
        if (uniqueTrains.indexOf(mainContent.locoGpsData[i].train_i) === -1) {
          uniqueTrains.push(mainContent.locoGpsData[i].train_i);
        }
        if (uniqueLocos.indexOf(mainContent.locoGpsData[i].loco_i) === -1) {
          uniqueLocos.push(mainContent.locoGpsData[i].loco_i);
        }
        if (uniqueSubs.indexOf(mainContent.locoGpsData[i].trans_subdiv_c) === -1) {
          uniqueSubs.push(mainContent.locoGpsData[i].trans_subdiv_c);
        }
        // if (uniqueDevice.indexOf(mainContent.locoGpsData[i].device_i) === -1) {
        //   uniqueDevice.push(mainContent.locoGpsData[i].device_i);
        // }
      }
      const cardStyles = new LargeIconCardStyles();
      const cardIcons = new LocoGpsIcons();
      mainContent.largeIconCardList.push(this.buildLargeCard('Trains',
        uniqueTrains,
        cardStyles.stylesList[0], cardIcons.iconList[0]));
      mainContent.largeIconCardList.push(this.buildLargeCard('Locos',
        uniqueLocos,
        cardStyles.stylesList[1], cardIcons.iconList[1]));
      mainContent.largeIconCardList.push(this.buildLargeCard('Subdivisions',
        uniqueSubs,
        cardStyles.stylesList[2], cardIcons.iconList[2]));
      // mainContent.largeIconCardList.push(this.buildLargeCard('Device',
      //   uniqueDevice,
      //   cardStyles.stylesList[3], cardIcons.iconList[3]));


      resolve(mainContent);
    }); }
  buildLargeCard(title: string, uniqueValues: string[], cardStyle: any,
                 cardIcon: string): LargeIconCard {
    const largeIconCard = new LargeIconCard();
    largeIconCard.title = title;
    largeIconCard.value = uniqueValues.length;
    largeIconCard.uniqueValues = uniqueValues;
    largeIconCard.cardStyle = cardStyle;
    largeIconCard.cardImage = cardIcon;
    return largeIconCard;
  }
  constructor() { }

}
